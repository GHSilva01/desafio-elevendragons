import Navbar from "./_navbar"
import Page from "./_page"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <Page titulo="Home" subtitulo="Welcome">

        <Card>
          <Card.Header>Desafio Técnico Eleven Dragons</Card.Header>
          <Card.Body>
            <Card.Title>Obrigado pela oportunidade</Card.Title>
            <Card.Text>
              Espero que possamos nos reencontrar.
            </Card.Text>
            <Link href="/users"><Button variant="primary">Start</Button></Link>
          </Card.Body>
        </Card>
      </Page>
    </>
  )
}
