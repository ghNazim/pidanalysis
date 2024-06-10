import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const SubscriptionCard = ({ subscription }) => (
  <Card>
    <Card.Body>
      <Row>
        <Col md={7}>
          <Card.Text>
            <a href="#">{subscription.addonId}</a>
            <br />
            Grade: {subscription.grade} <br />
            Cohort Id: {subscription.cohortId} <br />
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
            Course Id: {subscription.courseId} <br />
            Batch Id: {subscription.batchId}
          </Card.Text>
        </Col>
        <Col md={5} className="text-end">
          <Button variant="primary" className="mb-2">
            Actions <i className="fas fa-caret-down ms-1"></i>
          </Button>
          <Card.Text>
            Subscription Type: {subscription.subscriptionType} <br />
            Subscription Status:{" "}
            <span className={`badge ${subscription.subscriptionStatusBadge}`}>
              {subscription.subscriptionStatus}
            </span>{" "}
            <br />
            Sku Id: {subscription.skuId} <br />
            Academic Year: {subscription.academicYear} <br />
            Max Valid Till: {subscription.maxValidTill}
          </Card.Text>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const subscriptions = [
  {
    addonId: "SSO1-2312181607460072",
    grade: 5,
    cohortId: 30,
    addonStatus: "Deactivated",
    addonStatusBadge: "bg-danger",
    addonType: "Neo Classes",
    addonTypeBadge: "bg-primary",
    courseId: 5387,
    batchId: "63ea1205ee3830b317b5c36",
    subscriptionType: "Byjus Classes",
    subscriptionStatus: "Active",
    subscriptionStatusBadge: "bg-success",
    skuId: "SD05NA24",
    academicYear: 2024,
    maxValidTill: "31-May-2026",
  },
  {
    addonId: "SSO1-2312181607460072",
    grade: 6,
    cohortId: 22,
    addonStatus: "Active",
    addonStatusBadge: "bg-success",
    addonType: "Btc Classes",
    addonTypeBadge: "bg-secondary",
    courseId: 13578,
    batchId: "",
    subscriptionType: "Byjus Classes",
    subscriptionStatus: "Created",
    subscriptionStatusBadge: "bg-info",
    skuId: "SD06CB25",
    academicYear: 2025,
    maxValidTill: "31-May-2026",
  },
  {
    addonId: "SSO1-2312181607460072",
    grade: 7,
    cohortId: 23,
    addonStatus: "Created",
    addonStatusBadge: "bg-info",
    addonType: "",
    addonTypeBadge: "",
    courseId: "",
    batchId: "",
    subscriptionType: "Byjus Classes",
    subscriptionStatus: "Created",
    subscriptionStatusBadge: "bg-info",
    skuId: "SD07CB26",
    academicYear: 2026,
    maxValidTill: "31-May-2026",
  },
];

const Subscriptions = () => (
  <Container className="mt-4">
    {subscriptions.map((subscription, index) => (
      <SubscriptionCard key={index} subscription={subscription} />
    ))}
  </Container>
);

export default Subscriptions;
