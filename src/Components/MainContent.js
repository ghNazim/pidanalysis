import React from "react";
import { Tab, Tabs, Badge} from "react-bootstrap";
import UxosContents from "./UxosContents";
import TllmsContents from "./TllmsContents";
import TthContents from "./TthContents";
import Orders from "./Orders/Orders";
function MainContent() {
  return (
    <div className="main-content" style={{ width: "70%", padding: "20px" }}>
      <div className="mb-3 border-bottom">
        <h6>
          1515782016{" "}
          <Badge variant="success" className="mx-3">
            Synced
          </Badge>
        </h6>
      </div>
      <Tabs defaultActiveKey="UXOS" id="main-tabs" className="mb-3" justify>
        <Tab eventKey="UXOS" title="UXOS">
          <UxosContents />
        </Tab>
        <Tab eventKey="TLLMS" title="TLLMS">
          <TllmsContents />
        </Tab>
        <Tab eventKey="TTH" title="Batch Details">
          <TthContents />
        </Tab>
        <Tab eventKey="Orders" title="Orders">
          <Orders/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainContent;
