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