import React, { createContext, useEffect, useState } from "react";
import tllmsdata from "../DataDump/Tllms/1009151249_getapi_tllms_data.json";
import uxosdata from "../DataDump/uxos/1009151249_get_api_uxos_raw_data.json";
import { addonBatchMismatch, batchDatesOverlapping, dateValidation, hasError } from "../utility/utilityFunctions";
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
  const [syncErrors,setSyncErrors] = useState({uxos:null,tllms:null})
  useEffect(()=>{
    const addons = uxosData.addons
    const mappedErrors = addons.map(async (addonItem)=>{
      let mismatchArray = await addonBatchMismatch(addonItem)
      return {
        name: addonItem.reference_id,
        errors: {
          dateValidationError: dateValidation(
            addonItem.valid_from,
            addonItem.valid_till
          ),
          addonBatchStartError: mismatchArray.startValidation,
          addonBatchEndError: mismatchArray.endValidation,
          languageMismatchError: mismatchArray.languageMismatch,
          batchDatesOverlappingError: batchDatesOverlapping(addonItem,addons)
        },
      };
    })
    Promise.all(mappedErrors)
      .then((results) => {
        const filtered_result = results.filter((item) => hasError(item))
        setErrorArray(filtered_result);
        
      })
      .catch((error) => {
        console.log(error);
      });
  },[uxosData])
  useEffect(()=>{
    setSyncErrors((prev) => ({
      ...prev,
      uxos: uxosSyncData,
      tllms: tllmsData.Synch_Status,
    }));
  },[uxosSyncData,tllmsData])
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
