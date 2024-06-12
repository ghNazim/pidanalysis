import React, { useContext } from 'react'
import { Tab, Tabs } from "react-bootstrap";
import { DataContext } from '../Contexts/DataContext';
import SessionItem from './Tllms/SessionItem';

function TllmsContents() {
  const {tllmsData} = useContext(DataContext)
  const tabArray = tllmsData["Logistic_Sessions"];
  
  return (
    <Tabs defaultActiveKey="neo-sessions" id="sub-tabs">
      {tabArray.map((data,index) => {
        
        const k = Object.keys(data)[0]
        const v = Object.values(data)[0]
        
        return (
          <Tab eventKey={k} title={k} key={index}>
            <SessionItem dataArray={v}/>
          </Tab>
        );})}
      
    </Tabs>
  );
}

export default TllmsContents
