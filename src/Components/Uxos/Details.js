import React, { useContext } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import { formatReadableDate } from "../../utility/utilityFunctions";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function Details() {
  const {uxosData}=useContext(DataContext)


  return (
    <Container className="mt-4">
      <Row>
        <Col md={7}>
          <p>
            <strong>Student Name :</strong> {uxosData.student_details.full_name}
          </p>
          <p>
            <strong>Student Email :</strong> {uxosData.student_details.email}
          </p>
          <p>
            <strong>Primary Number :</strong> {uxosData.student_details.mobile}
          </p>
        </Col>
        {/* <Col md={4}>
          <div className="border p-2">
            <p>
              <strong>Extra Information</strong>
            </p>
            <p>
              <strong>Customer Id :</strong> CX-2406101204122008
            </p>
            <p>
              <strong>Max Validity :</strong>{" "}
              {formatReadableDate(
                uxosData.studentAdditionalDetails.maxValidity
              )}
            </p>
            <p>
              <strong>Premium Account Status :</strong>{" "}
              <span className="badge bg-success">Active</span>
            </p>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Details;
