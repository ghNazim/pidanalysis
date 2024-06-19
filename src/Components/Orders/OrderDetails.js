import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import Kart from "./Kart";
import { convertOrderId, extractDate, formatReadableDate } from "../../utility/utilityFunctions";

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      {product.validity && product.validityMonth ? (
        <td>
          {(product.validity || "") + ", " + (product.validityMonth || "")}
        </td>
      ) : (
        <td>{formatReadableDate(extractDate(product.name))}</td>
      )}
    </tr>
  );
}

function OrderCard({ orderId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const url = "http://localhost:3001/uxosapi";
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": "O58PLeeL5i1HgPHFsUunD9MCE80CKTa34VaIF5rB",
      };
      const body = JSON.stringify({
        collection: "orders",
        db: "byjusleado",
        filter: {
          orderId: convertOrderId(orderId),
        },
        select: "customerDetails",
        limit: 1,
      });

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: headers,
          body: body,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.docs[0].customerDetails[0].products);
      } catch (err) {
        console.error("Error fetching order details:", err);
      }
    };
    fetchOrderDetails();
  }, [orderId]);
  if (!data)
    return (
      <Card>
        <Card.Body>
          <strong>Order Id:</strong> {orderId}
          <br />
          Could not fetch data
        </Card.Body>
      </Card>
    );
  return (
    <Card>
      <Card.Body>
        <strong>Order Id:</strong> {orderId}
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
  const { allOrders } = useContext(DataContext);
  return (
    <Container className="mt-4">
      <Kart />
      {allOrders.map((item, index) => (
        <OrderCard orderId={item} key={index} />
      ))}
    </Container>
  );
}

export default OrderDetails;
