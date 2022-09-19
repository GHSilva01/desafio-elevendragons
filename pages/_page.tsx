import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default (props) => {
  return (
    <>
      <Jumbotron className='jumbotron'>
        <Container>
          <h1 className='jumbotron.text'><strong>{props.titulo}</strong></h1>
          <p><strong>{props.subtitulo}</strong></p>
        </Container>
      </Jumbotron>

      <Container className="mb-5">
          {props.children}
      </Container>
    </>
  )
}