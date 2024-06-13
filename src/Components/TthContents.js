import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import BatchCard from './TTH/BatchCard';
import { DataContext } from '../Contexts/DataContext';
function TthContents() {
const { allBatches } = useContext(DataContext);

  return (
    <Container className="mt-4">
      {allBatches.map((item, index) => (
        <BatchCard id={item} key={index} />
      ))}
    </Container>
  );
}
export default TthContents
