import React, { createContext, useState } from "react";
import tllmsdata from "../DataDump/Tllms/1009151249_getapi_tllms_data.json";
import uxosdata from "../DataDump/uxos/1009151249_get_api_uxos_raw_data.json";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [uxosData, setUxosData] = useState(uxosdata.docs[0]);
  const [tllmsData, setTllmsData] = useState(tllmsdata);
  return (
    <DataContext.Provider value={{ uxosData, setUxosData, tllmsData, setTllmsData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
