import React, { useContext } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import { formatReadableDate } from "../../utility/utilityFunctions";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function Details() {
  const {uxosData}=useContext(DataContext)
  const mobileError =
    uxosData.primaryNumber !== uxosData.student_details.mobile;


  return (
    <Container className="mt-4">
      <Row>
        <Col md={11}>
          <p>
            <strong>Student Name :</strong> {uxosData.student_details.full_name}
          </p>
          <p>
            <strong>Student Email :</strong> {uxosData.student_details.email}
          </p>
          <p>
            <strong>Primary Number :</strong> {uxosData.primaryNumber}
          </p>
          <p>
            <strong>Mobile :</strong> {uxosData.student_details.mobile}
          </p>
          {mobileError && (
            <Alert variant="danger" className="mb-1 errorCard">
              Primary and mobile are not equal.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
