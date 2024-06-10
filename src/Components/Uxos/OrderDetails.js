import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function OrderDetails() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Row>
            <Col md={8}>
              <Card.Text>
                <a href="#">SO-2312180829060367</a>
                <br />
                Order Type : SPLIT_PARENT <br />
                Device Name: BYJU'S LearnStation 10inch Mobile Data Stock
                Android Tablet (Rs 12000)
              </Card.Text>
            </Col>
            <Col md={4} className="text-end">
              <Card.Text>
                <span className={"badge bg-success"}>Active</span> <br />
                Device Model : SCXMGS <br />
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrderDetails;
