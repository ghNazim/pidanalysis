import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
function Sidebar() {
  return (
    <div
      className="bg-light sidebar"
      style={{ width: "30%", height: "100vh", overflowY: "auto" }}
    >
      <InputGroup className="mb-3">
        <Form.Control placeholder="Search Premium Id" />
        <Button variant="outline-secondary" id="search_btn">
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default Sidebar;
