import React, { useContext } from 'react'
import { Tab, Tabs } from "react-bootstrap";
import { DataContext } from '../Contexts/DataContext';
import SessionItem from './Tllms/SessionItem';
import Loading from './Loading';

function TllmsContents() {
  const { tllmsData, tllmsLoading } = useContext(DataContext);
  let tabArray = tllmsData["Logistic_Sessions"];
  
  return (
   tllmsLoading? <Loading/>: <Tabs defaultActiveKey="neo-sessions" id="sub-tabs">
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
