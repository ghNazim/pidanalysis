import React, { useContext } from 'react'
import {Container, Alert } from 'react-bootstrap';
import { DataContext } from '../../Contexts/DataContext'
import { toText } from '../../utility/utilityFunctions';

function ErrorCard({errorItem}) {
  return (
    <Alert variant="danger" className="mb-1 errorCard">
      {errorItem.name} <br />
      <div className='formatted'>{toText(errorItem.errors)}</div>
    </Alert>
  );
}

function ErrorTab() {
    const { errorArray, tllmsErrors } = useContext(DataContext);
  return (
    <Container className="mt-4">
      {errorArray.map((item, index) => (
        <ErrorCard errorItem={item} key={index} />
      ))}
      {tllmsErrors.map((item, index) => (
        <Alert variant="warning" className="mb-1 errorCard">
          {item} <br />
          <div className="formatted">Not delivered on TLLMS</div>
        </Alert>
      ))}
    </Container>
  );
}

export default ErrorTab
