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
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const batchData = await response.json();
      return batchData
    } catch (error) {
      console.log(error.message);
    }
  
};

export const convertOrderId = function(orderid){
  const match = orderid.match(/\d+$/);
  if (match) {
    return "SSO1-"+ match[0];
  }
  return null
}
// const fetchTllmsData = async () => {
//   try {
//     const response = await fetch(
//       `https://d401-14-143-179-34.ngrok-free.app/get_tllms?pid=1843402884&auth=hiLFlLErXjAtYhoYR/UJsA==`
//     );
//     console.log("after get");
//     if (!response.ok) {
//       console.log("response not ok");
//       throw new Error(`Error: ${response.status}`);
//     }
//     const result = await response.json();
//     console.log("tllms result", result);
//     setTllmsData(result);
//   } catch (err) {
//     setError(err.message);
//     console.log(err);
//   } finally {
//     setTllmsLoading(false);
//   }
// };