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
  const [syncErrors,setSyncErrors] = useState({uxos:null,tllms:null,mobile:null})
  const [tllmsErrors,setTllmsErrors] = useState([])
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
      mobile: uxosData.primaryNumber !== uxosData.student_details.mobile,
    }));
  },[uxosSyncData,tllmsData,uxosData])
  useEffect(()=>{
    const allRefs = tllmsData["Logistic_Sessions"];
    const onlyData = allRefs.map((data, index) => {
      const v = Object.values(data)[0];
      return (v);
    });
    const flatAll = onlyData.flat()
    const filteredFlat = flatAll.filter((data)=>{
      const deliveryStatus = data["Delivery Date"] || data["DELIVERY DATE"];
      const notDelivered =
        deliveryStatus === "Not Delivered" ||
        deliveryStatus === "NOT DELIVERED";
        return notDelivered
    })
    setTllmsErrors(filteredFlat.map( i => (i["Reference"] || i["REFERENCE"])))
  },[tllmsData])
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
        syncErrors,
        setSyncErrors,
        tllmsErrors,
        setTllmsErrors,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
