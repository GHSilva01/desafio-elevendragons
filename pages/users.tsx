import React, { useContext, useEffect, useState } from 'react'
import Navbar from "./_navbar"
import Page from "./_page"
import Users from "./api/users"
import { Table, Form, FormControl, Button, Dropdown, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { UsersContext } from './_usersContext'

export default () => {

    const { data } = useContext(UsersContext)
    const [searchFilter, setSearchFilter] = useState('')
    const [dataFilter, setDataFilter] = useState([])
    const [statusFilter, setStatusFilter] = useState('')

    useEffect(() => {

        setDataFilter(data)
        console.log(dataFilter)
    }, [data])

    useEffect(() => {

        setDataFilter(data.filter((v) => {
            const name = searchFilter.toLowerCase().trim()
            const searchMatch = v.name.toLowerCase().includes(name)
            const statusMatch = v.status.startsWith(statusFilter)
            return searchMatch && statusMatch

        }))


    }, [statusFilter, searchFilter])



    return (
        <>

            <Navbar />
            <Page titulo="Users" subtitulo="A list of users">
                <Col className='col'>
                    <Row>
                        <Form inline className="mr-2">
                            <FormControl type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} placeholder="Search a user by name" />
                        </Form>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Status
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setStatusFilter('')}>All</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('active')}>Active</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStatusFilter('inactive')}>Inactive</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                </Col>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataFilter.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                <Link href="/usersCreate"><Button className="btn-create" variant="outline-info">Create New User</Button></Link>
            </Page>

        </>
    )
}