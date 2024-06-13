export function formatReadableDate(isoString) {
  const date = new Date(isoString);

  // Options for formatting the date
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

export const dateValidation = (valid_from,valid_till) =>{
  const fromDate = new Date(valid_from)
  const tillDate = new Date(valid_till)

  return fromDate > tillDate
}


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
  if (batchId) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        console.log("Error fetching from server");
        return;
      }

      const batchData = await response.json();
      // console.log("Batch details: ",batchData)
    } catch (error) {
      console.log(error.message);
    }
  } else return;
};
