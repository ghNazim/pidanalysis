import React from 'react'
import { Badge, Container } from 'react-bootstrap'

function Kart() {
    const status = "Delivered"
  return (
    <Container className="my-2">
      <h5>
        {" "}
        Kart OMS status:{" "}
        <Badge bg={status === "Delivered" ? "success" : "danger"}>
          {status}
        </Badge>
      </h5>
    </Container>
  );
}

export default Kart
