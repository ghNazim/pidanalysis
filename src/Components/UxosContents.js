import React, { useContext } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Addons from "./Uxos/Addons";
import Details from "./Uxos/Details";
import Subscriptions from "./Uxos/Subscriptions";
import OrderDetails from "./Uxos/OrderDetails";

function UxosContents() {
  return (
    <Tabs defaultActiveKey="details" id="sub-tabs">
      <Tab eventKey="details" title="Details">
        <Details />
      </Tab>
      <Tab eventKey="addons" title="Addons (Services)">
        <Addons />
      </Tab>
      <Tab eventKey="orders" title="Orders">
        <OrderDetails />
      </Tab>
      <Tab eventKey="subscriptions" title="Subscriptions (Products)">
        <Subscriptions />
      </Tab>
    </Tabs>
  );
}

export default UxosContents;
