import React, { createContext, useState } from "react";
import tllmsdata from "../DataDump/Tllms/1009151249_getapi_tllms_data.json";
import uxosdata from "../DataDump/uxos/1009151249_get_api_uxos_raw_data.json";
const DataContext = createContext();
const error = [
  {
    addon: "SSO1-21112816550101781009000R",
    text: "Valid from is greater than valid till",
  },
  {
    addon: "SSO1-21112816550101781009000R",
    text: "Valid from is greater than valid till",
  },
  {
    addon: "SSO1-21112816550101781009000R",
    text: "Batch overlapping Error ",
  },
  {
    addon: "SSO1-21112816550101781009000R",
    text: "Batch overlapping Error ",
  }
];
const DataProvider = ({ children }) => {
  const [uxosData, setUxosData] = useState(uxosdata.docs[0]);
  const [tllmsData, setTllmsData] = useState(tllmsdata);
  const [errorArray,setErrorArray] = useState(error)
  return (
    <DataContext.Provider value={{ uxosData, setUxosData, tllmsData, setTllmsData, errorArray, setErrorArray }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
