import React, { FormEvent, useContext, useEffect, useState } from 'react'
import Navbar from "./_navbar"
import Page from "./_page"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormLabel, FormControl, Card, Col } from 'react-bootstrap'
import { UsersContext } from './_usersContext';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default () => {

    const router = useRouter()
    const { setData, data } = useContext(UsersContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('active')

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = { name, email, status }
        setData([...data, formData])
        router.push('/users')
    }

    return (
        <>
            <Navbar />
            <Page titulo="Create User" subtitulo="Create a user">

                <Card>
                    <Card.Body>
                        <Form onSubmit={submit}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Name (Only AlphaNumerics and Underscore)</Form.Label>
                                <Form.Control
                                    minLength={4} maxLength={20}
                                    pattern="[a-zA-Z0-9_\s]+"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    type="name"
                                    placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Group>
                                    <Form.Label as="legend">
                                        Status
                                    </Form.Label>
                                    <Form.Check
                                        onChange={(e) => setStatus(e.target.value)}
                                        checked={status == 'active'}
                                        type="radio"
                                        label="active"
                                        name="active"
                                        id="formHorizontalRadios1"
                                        value="active"
                                    />
                                    <Form.Check
                                        onChange={(e) => setStatus(e.target.value)}
                                        checked={status == 'inactive'}
                                        type="radio"
                                        label="inactive"
                                        name="inactive"
                                        id="formHorizontalRadios2"
                                        value="inactive"
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Button type="submit" variant="outline-success">Submit</Button>
                            <Link href="/users"><Button className="btn-create ml-2" variant="outline-warning">Previous Page</Button></Link>
                        </Form>
                    </Card.Body>
                </Card>
            </Page>
        </>
    )
}
