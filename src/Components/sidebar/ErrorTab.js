import React, { useContext } from 'react'
import {Container, Alert } from 'react-bootstrap';
import { DataContext } from '../../Contexts/DataContext'

function ErrorCard({error}) {
  return (
    
      <Alert variant="danger" className='mb-1 errorCard'>
        {error.name} <br />
        {error.text}
      </Alert>

  );
}

function ErrorTab() {
    const {errorArray} = useContext(DataContext)
  return (
    <Container className="mt-4">
      {errorArray.map( (item,index) => <ErrorCard error={item} key={index} />)}
    </Container>
  );
}

export default ErrorTab
