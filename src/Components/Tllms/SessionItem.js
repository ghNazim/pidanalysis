import React from 'react'
import { Table, Container } from "react-bootstrap";

function SingleItem({data}){
    const validTill = data.Batch
      ? JSON.stringify(data["Valid Till"])
      : JSON.stringify(data["VALID TILL"]);
    return (
      <tr>
        <td>{data.Batch || data.BATCH}</td>
        <td>{data.Reference || data.REFERENCE}</td>
        <td>{data.Cohort || data.COHORT}</td>
        <td>{data["Valid From"] || data["VALID FROM"]}</td>
        <td>
          {validTill}
        </td>
        <td>{data["Delivery Date"] || data["DELIVERY DATE"]}</td>
      </tr>
    );
}
function SessionItem({dataArray}) {
  return (
    <Container className="mt-4">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Batch</th>
            <th>Reference Id</th>
            <th>Cohort</th>
            <th>Valid From</th>
            <th>Valid Till</th>
            <th>Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((i, index)=> <SingleItem data={i} key={index}/>)}
        </tbody>
      </Table>
    </Container>
  );
}

export default SessionItem
