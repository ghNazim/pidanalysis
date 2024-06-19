export function formatReadableDate(isoString) {
  const date = new Date(isoString);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export function isDateInFuture(dateTimeString) {
  const inputDate = new Date(dateTimeString);
  const currentDate = new Date();
  return inputDate > currentDate;
}

export const dateValidation = (valid_from, valid_till) => {
  const fromDate = new Date(valid_from);
  const tillDate = new Date(valid_till);

  return fromDate > tillDate;
};

export const fetchBatchData = async (batchId) => {
  const batchNumerical = !isNaN(batchId);
  const url = batchNumerical
    ? `http://localhost:3001/batchapinum/${batchId}`
    : `http://localhost:3001/batchapihex/${batchId}`;
  const headers = batchNumerical
    ? {
        "x-auth-token": "feded7a7ce332d750e6173fbf3a406cec9cc5c52848bfcb29432",
        "Content-Type": "application/json",
      }
    : {
        tenant: "byjus",
        client_id: "UXOS",
        client_key: "caf85fd3f5402223c6f5e8c9985ff150",
      };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const batchData = await response.json();
    return batchData;
  } catch (error) {
    console.log(error.message);
  }
};

export const convertOrderId = function (orderid) {
  const match = orderid.match(/\d+$/);
  if (match) {
    return "SSO1-" + match[0];
  }
  return null;
};

export const addonBatchMismatch = async (addon) => {
  if (!addon.batch_id)
    return {
      startValidation: false,
      endValidation: false,
      languageMismatch: false,
    };
  const nonblc = isNaN(addon.batch_id);
  const batch = await fetchBatchData(addon.batch_id);
  const batchStartDate = nonblc ? batch.data.batch_start_date : batch.startDate;
  const batchEndDate = nonblc ? batch.data.batch_end_date : batch.endDate;
  const addonStartDate = addon.valid_from;
  const from_date = new Date(addonStartDate);
  const till_date = new Date(batchEndDate);
  from_date.setDate(from_date.getDate() + 4);
  const addonLang = addon.language_of_instruction;
  const batchLang = batch?.data?.tutor_languages[0]?.name;
  const difflang = (nonblc && addonLang && batchLang) ? batchLang !== addonLang : false;

  return {
    startValidation: batchStartDate
      ? dateValidation(batchStartDate, addonStartDate)
      : false,
    endValidation: batchEndDate ? from_date > till_date : false,
    languageMismatch: difflang,
  };
};

export function isOverlapping(startDate1, endDate1, startDate2, endDate2) {
  const start1 = new Date(startDate1);
  const end1 = new Date(endDate1);
  const start2 = new Date(startDate2);
  const end2 = new Date(endDate2);
  return start1 <= end2 && start2 <= end1;
}

export function batchDatesOverlapping(current, addons) {
  const result = addons.filter(
    (item) =>
      item.reference_id !== current.reference_id &&
      item.batch_id &&
      item.batch_id === current.batch_id &&
      isOverlapping(
        current.valid_from,
        current.valid_till,
        item.valid_from,
        item.valid_till
      )
  );
  return result;
}

export function hasError(errorItem) {
  const errorObject = errorItem.errors;
  return (
    errorObject.dateValidationError ||
    errorObject.addonBatchStartError ||
    errorObject.addonBatchEndError ||
    errorObject.languageMismatchError ||
    errorObject.batchDatesOverlappingError.length > 0
  );
}

export const toText = function (errors) {
  let errorText = "";
  if (errors.dateValidationError) {
    errorText = errorText + "Valid from is greater than valid till \n";
  }
  if (errors.addonBatchStartError) {
    errorText =
      errorText + "Addon start date is before batch first class date \n";
  }
  if (errors.addonBatchEndError) {
    errorText =
      errorText + "Addon start date is after batch last class date \n";
  }

  if (errors.languageMismatchError) {
    errorText =
      errorText + "Batch language is different from addon language \n";
  }
  if (errors.batchDatesOverlappingError.length > 0) {
    errorText =
      errorText +
      `Multiple addons for same batch, dates are overlapping  \n [${errors.batchDatesOverlappingError
        .map((i) => i.reference_id)
        .join()}] \n`;
  }

  return errorText;
};
