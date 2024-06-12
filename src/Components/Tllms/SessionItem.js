import React from 'react'
import { Table, Container } from "react-bootstrap";

function SingleItem({data}){
    
    return (
      <tr>
        <td>{data.Reference}</td>
        <td>{data.Cohort}</td>
        <td>{data["Valid From"]}</td>
        <td>{data["Valid Till"]?Object.values(data["Valid Till"])[0]:""}</td>
        <td>{data["Delivery Date"]}</td>
      </tr>
    );
}
function SessionItem({dataArray}) {
  return (
    <Container className="mt-4">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
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
