import React, { useContext } from "react";
import { Card, Container, Table } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import Kart from "./Kart";
import  {orderArray}  from "../../DataDump/Order/orderArray";

function ProductRow({product}){

  return (
    <tr>
      <td>{product.name}</td>
      <td>{(product.validity||"") + ", "+  (product.validityMonth|| "")}</td>
    </tr>
  );
}

function OrderCard({order}){
  const data = order.docs[0].customerDetails[0].products;
  return (
    <Card>
      <Card.Body>
        <strong>Order Id:</strong> SSO1-2111281655010178
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th> Product Name </th>
              <th>Valid till</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <ProductRow product={item} key={index} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
function OrderDetails() {
  
  const {uxosData} = useContext(DataContext)
  const uxosOrdersArray = uxosData.order_lines;
  return (
    <Container className="mt-4">
      <Kart/>
      {orderArray.map((item,index)=><OrderCard order={item} key={index}/>)}
    </Container>
  );
}

export default OrderDetails;
