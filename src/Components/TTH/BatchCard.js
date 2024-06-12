import React from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { formatReadableDate } from '../../utility/utilityFunctions';

function BatchCard({batch}) {
    const nonblc = ("success" in batch)
     const batchid = nonblc ? batch.data.id : batch.batchId,
       courseId = nonblc ? batch.data.course_id : batch.courseId,
       startDate = formatReadableDate(
         nonblc ? batch.data.batch_start_date : batch.startDate
       ),
       endDate = formatReadableDate(
         nonblc ? batch.data.batch_end_date : batch.endDate
       ),
       cohort = nonblc ? batch.data.cohort_id : batch.courseAliasDetails.cohort,
       languauge = nonblc ? batch.data.medium_of_instruction : "N/A";
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
