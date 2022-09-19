import React from 'react'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Logo } from './_logo'

export default () => {
  return (
    <>

      <Navbar>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Brand><Logo /></Navbar.Brand>
            <Navbar.Text>
              <a className="nav-text" href="/users">Users</a>
            </Navbar.Text>
            <Navbar.Text>
              <a className="nav-text" href="/">Home</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}
