import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { DataContext } from "../../Contexts/DataContext";
import { formatReadableDate } from "../../utility/utilityFunctions";

const SubscriptionCard = ({ subscription, orderId }) => (
  <Card>
    <Card.Body>
      <Row>
        <Col md={7}>
          <Card.Text>
            <a href="#">{orderId}</a>
            <br />
            Grade: {subscription.grade} <br />
            Cohort Id: {subscription.cohort_id} <br />
            Addon Status:{" "}
            <span className={`badge ${subscription.addonStatusBadge}`}>
              {subscription.addonStatus}
            </span>{" "}
            <br />
            Addon Type:{" "}
            <span className={`badge ${subscription.addonTypeBadge}`}>
              {subscription.addonType}
            </span>{" "}
            <br />
            Course Id: {subscription.course_id} <br />
            Batch Id: {subscription.batch_id}
          </Card.Text>
        </Col>
        <Col md={5} className="text-end">
          <Button variant="primary" className="mb-2">
            Actions
          </Button>
          <Card.Text>
            Subscription Type: {subscription.subscriptionType} <br />
            Sku Id: {subscription.skuId} <br />
            Academic Year: {subscription.valid_till.split("-")[0]} <br />
            Max Valid Till: {formatReadableDate(subscription.max_valid_till)}
          </Card.Text>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);



const Subscriptions = () => {
  const {uxosData} = useContext(DataContext)
  const orderlines = uxosData.order_lines;
  return (
    <Container className="mt-4">
      {orderlines.map((order) =>
        order.subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={index}
            subscription={subscription}
            orderId={order.orderId}
          />
        ))
      )}
    </Container>
  );};

export default Subscriptions;
