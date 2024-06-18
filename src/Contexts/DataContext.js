import React, { createContext, useState } from "react";
import tllmsdata from "../DataDump/Tllms/1009151249_getapi_tllms_data.json";
import uxosdata from "../DataDump/uxos/1009151249_get_api_uxos_raw_data.json";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [uxosData, setUxosData] = useState(uxosdata.docs[0]);
  const [tllmsData, setTllmsData] = useState(tllmsdata);
  const [errorArray,setErrorArray] = useState([])
  const [allBatches, setAllBatches] = useState([]);
  const [allOrders, setAllOrders] = useState([])
  const [pid,setPid] = useState("0000000000")
  const [uxosLoading,setUxosLoading] = useState(false)
  const [tllmsLoading,setTllmsLoading] = useState(false)
  const [uxosSyncData,setUxosSyncData] = useState({})

  return (
    <DataContext.Provider
      value={{
        uxosData,
        setUxosData,
        tllmsData,
        setTllmsData,
        errorArray,
        setErrorArray,
        allBatches,
        setAllBatches,
        pid,
        setPid,
        uxosLoading,
        setUxosLoading,
        tllmsLoading,
        setTllmsLoading,
        allOrders,
        setAllOrders,
        uxosSyncData,
        setUxosSyncData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
