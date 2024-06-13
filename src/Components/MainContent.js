import React, { useContext } from "react";
import { Tab, Tabs, Badge, Button,} from "react-bootstrap";

import UxosContents from "./UxosContents";
import TllmsContents from "./TllmsContents";
import TthContents from "./TthContents";
import OrderDetails from "./Orders/OrderDetails";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../Contexts/DataContext";

// Adding the arrow icon to the library
library.add(faArrowRight);

function MainContent() {
  const {pid} = useContext(DataContext);
  return (
    <div className="main-content" style={{ width: "70%", padding: "20px" }}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h6>
          {pid}
          <Badge variant="success" className="mx-3">
            Synced
          </Badge>
        </h6>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mx-2">
            <Button variant="primary">Sync K-12</Button>

            <Button variant="success">Sync Aaakash</Button>
            <Button variant="warning">Sync All</Button>
          </div>
          <Button variant="danger">
            Post <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </div>
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
          <OrderDetails />
        </Tab>
      </Tabs>
    </div>
  );
}

export default MainContent;
