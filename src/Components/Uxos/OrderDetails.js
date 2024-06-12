import React, { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";


function OrderCard({order}){
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Text>
              <a href="#">{order.orderId}</a>
              <br />
              Order Type : {order.orderType} <br />
              Device Name: {order.device_details.name}
            </Card.Text>
          </Col>
          <Col md={4} className="text-end">
            <Card.Text>
              <span className={"badge bg-success"}>BHLP</span> <br />
              Device Model : SCXMGS <br />
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
function OrderDetails() {
  const {uxosData} = useContext(DataContext)
  const orderArray = uxosData.order_lines;
  return (
    <Container className="mt-4">
      {orderArray.map((item,index)=><OrderCard order={item} key={index}/>)}
    </Container>
  );
}

export default OrderDetails;
