import React, { createContext, useEffect, useState } from "react";
import tllmsdata from "../DataDump/Tllms/1009151249_getapi_tllms_data.json";
import uxosdata from "../DataDump/uxos/1009151249_get_api_uxos_raw_data.json";
import {batchArray} from "../DataDump/Batches/batchdetails.js";
import {orderArray} from "../DataDump/Order/orderArray.js";
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
  const [batchDataArray,setBatchDataArray] = useState(batchArray)
  const [orderDataArray,setOrderDataArray] = useState(orderArray)
  const [tllmsData, setTllmsData] = useState(tllmsdata);
  const [errorArray,setErrorArray] = useState(error)
  const [allBatches, setAllBatches] = useState([]);
  const [allOrders, setAllOrders] = useState([])
  const [pid,setPid] = useState("0000000000")
  const [uxosLoading,setUxosLoading] = useState(false)
  const [tllmsLoading,setTllmsLoading] = useState(false)

  useEffect(()=>{
    const addons = uxosData.addons;
    const orderList = uxosData.order_lines;
    const mappedBatches = addons
      .filter((i) => i.batch_id)
      .map((d) => d.batch_id);
    const mappedOrders = orderList.map((i) => i.orderId);
  },[uxosData])
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
