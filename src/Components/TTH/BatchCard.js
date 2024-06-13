import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from "react-bootstrap";
import {  formatReadableDate } from '../../utility/utilityFunctions';

function BatchCard({id}) {
  const [batch, setBatch] = useState(null);
  useEffect(()=>{
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

          const loadedData = await response.json();
          setBatch(loadedData);
        } catch (error) {
          console.log(error.message);
        }
      } else return;
    };
    fetchBatchData(id);
  },[])
  
    if(!batch) return <div>Loading...</div>
    const nonblc = isNaN(id);
     const batchid = nonblc ? batch.data.id : batch.batchId,
       courseId = nonblc ? batch.data.course_id : batch.courseId,
       startDate = formatReadableDate(
         nonblc ? batch.data.batch_start_date : batch.startDate
       ),
       endDate = formatReadableDate(
         nonblc ? batch.data.batch_end_date : batch.endDate
       ),
       cohort = nonblc ? batch.data.cohort_id : batch.courseAliasDetails.cohort,
       languauge = nonblc ? batch.data.tutor_languages[0].name : "N/A";
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={7}>
            <Card.Text>
              <a href="#">{batchid}</a>
              <br />
              Course Id : {courseId} <br />
              Cohort: {cohort} <br />
              Language: {languauge}
            </Card.Text>
          </Col>
          <Col md={5} className="text-end">
            <Card.Text>
              Start Date : {startDate} <br />
              End Date : {endDate}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default BatchCard
