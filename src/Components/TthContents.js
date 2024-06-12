import React from 'react'
import { Container } from 'react-bootstrap';
import { batchArray } from '../DataDump/Batches/batchdetails';
import BatchCard from './TTH/BatchCard';
function TthContents() {
  return (
    <Container className="mt-4">
      {batchArray.map((item, index) => (
        <BatchCard batch={item} key={index} />
      ))}
    </Container>
  );
}

export default TthContents
