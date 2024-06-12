import React, { useContext } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Addons from "./Uxos/Addons";
import Details from "./Uxos/Details";
import Subscriptions from "./Uxos/Subscriptions";


function UxosContents() {
  return (
    <Tabs defaultActiveKey="details" id="sub-tabs">
      <Tab eventKey="subscriptions" title="Subscriptions (Products)">
        <Subscriptions />
      </Tab>
      <Tab eventKey="addons" title="Addons (Services)">
        <Addons />
      </Tab>
      <Tab eventKey="details" title="Details">
        <Details />
      </Tab>
    </Tabs>
  );
}

export default UxosContents;
