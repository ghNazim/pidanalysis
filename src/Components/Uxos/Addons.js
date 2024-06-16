import React, { useContext, useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import {
  isDateInFuture,
  dateValidation,
  formatReadableDate,
} from "../../utility/utilityFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const AddonItem = ({ data }) => {
  const [batchStartDate, setBatchStartDate] = useState("");
  const [batchEndDate, setBatchEndDate] = useState("");
  const [batchLanguage, setBatchLanguage] = useState("N/A");

  useEffect(() => {
    const fetchBatchData = async (batchId) => {
      const batchNumerical = !isNaN(batchId);
      const url = batchNumerical
        ? `http://localhost:3001/batchapinum/${batchId}`
        : `http://localhost:3001/batchapihex/${batchId}`;
      const headers = batchNumerical
        ? {
            "x-auth-token":
              "feded7a7ce332d750e6173fbf3a406cec9cc5c52848bfcb29432",
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

          const batch = await response.json();
          if (batchNumerical) {
            setBatchStartDate(batch.startDate);
            setBatchEndDate(batch.endDate);
          } else {
            setBatchStartDate(batch.data.batch_start_date);
            setBatchEndDate(batch.data.batch_end_date);
            setBatchLanguage(batch.data.tutor_languages[0].name);
          }
        } catch (error) {
          console.log(error.message);
        }
      } else return;
    };
    if (data?.batch_id) fetchBatchData(data.batch_id);
  }, []);
  const isActive = isDateInFuture(data.valid_till);
  const errorlist = {
    dateValidationError: dateValidation(data.valid_from, data.valid_till),
  };

  const filteredErrorList = Object.fromEntries(
    Object.entries(errorlist).filter(([key, value]) => value === true)
  );
  const isErrored = Object.keys(filteredErrorList).length > 0;

  return (
    <tr>
      <td className="tdError">
        {isErrored && (
          <>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              size="2x"
              color="gray"
            />
            {/* <div className="errorLeft">{errorText}</div> */}
          </>
        )}
      </td>

      <td>{data.reference_id} </td>
      <td>{data.valid_from.split(" ")[0]}</td>
      <td>{data.valid_till.split(" ")[0]}</td>
      <td>
        <span className={`badge ${isActive ? "bg-success" : "bg-danger"}`}>
          {isActive ? "Active" : "deactive"}
        </span>
      </td>
      {/* <td>Math Science</td> */}
      <td>{data.language_of_instruction}</td>
      <td>6</td>

      <td>
        {data.batch_id}
        <br />
        <small className="small">
          {data.batch_id
            ? `${formatReadableDate(batchStartDate)}-${formatReadableDate(
                batchEndDate
              )}`
            : ""}
          <br />
          {data.batch_id ? batchLanguage : ""}
        </small>
        <br />
      </td>

      <td>{data.type}</td>
    </tr>
  );
};
const Addons = () => {
  const { uxosData, setAllBatches, setAllOrders } = useContext(DataContext);
  const addons = uxosData.addons;
  const orderList = uxosData.order_lines
  useEffect(() => {
    const mappedBatches = addons
      .filter((i) => i.batch_id)
      .map((d) => d.batch_id);
    const mappedOrders = orderList.map((i) => i.orderId);
    setAllBatches(mappedBatches);
    setAllOrders(mappedOrders)
  }, [uxosData]);
  
  return (
    <Container className="mt-4">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th> Error </th>
            <th>Addon Id</th>
            <th>Valid From</th>
            <th>Valid Till</th>
            <th>Status</th>
            <th>Language</th>
            {/* <th>Course Alias</th> */}

            <th>Grade</th>

            <th>Batch Id</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {addons.map((item, index) => (
            <AddonItem data={item} key={index} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Addons;
