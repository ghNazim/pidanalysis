import React, { useContext } from "react";
import { Tab, Tabs, Alert } from "react-bootstrap";
import Addons from "./Uxos/Addons";
import Details from "./Uxos/Details";
import Subscriptions from "./Uxos/Subscriptions";
import { DataContext } from "../Contexts/DataContext";
import Loading from "./Loading";


function UxosContents() {
  const { uxosSyncData, uxosLoading } = useContext(DataContext);
  return uxosLoading ? <Loading/> : (
    <>
      {uxosSyncData.Synch_Status==="Not Synced" && <Alert variant="danger" className="mb-1 errorCard">
        {JSON.stringify(uxosSyncData)}
      </Alert>}
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
    </>
  );
}

export default UxosContents;
