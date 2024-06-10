import React from "react";
import { Container, Row, Col} from "react-bootstrap";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function Details() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={7}>
          <p>
            <strong>Student Name :</strong> Angel Pragya{" "}
            
          </p>
          <p>
            <strong>Student Email :</strong> 7552233553@byjusexamprep.com{" "}
            
          </p>
          <p>
            <strong>Primary Number :</strong> +91-1111111673{" "}
            
          </p>
          <p>
            <strong>Order Punched From :</strong> 17139
          </p>
          <p>
            <strong>Updated At :</strong> Monday, June 10, 2024 5:36 PM
          </p>
          <p>
            <strong>Created At :</strong> Monday, June 10, 2024 5:34 PM
          </p>
        </Col>
        <Col md={4}>
          <div className="border p-2">
            <p>
              <strong>Extra Information</strong>
            </p>
            <p>
              <strong>Customer Id :</strong> CX-2406101204122008
            </p>
            <p>
              <strong>Max Validity :</strong> Tuesday, June 11, 2024 5:00 AM
            </p>
            <p>
              <strong>Premium Account Status :</strong>{" "}
              <span className="badge bg-success">Active</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
