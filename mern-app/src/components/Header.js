import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">User Registration</NavLink>
                    {/* <Nav className="me-auto"> */}
                        <NavLink to="/details" className="text-decoration-none text-light mx-2">Home&nbsp;</NavLink>
                        <NavLink to="/Teacherrecord" className="text-decoration-none text-light">Teacherrecord&nbsp;</NavLink>
                        <NavLink to="/Teacherview" className="text-decoration-none text-light">Teacherview&nbsp;</NavLink>
                        <NavLink to="/Studentrecord" className="text-decoration-none text-light">Studentrecord&nbsp;</NavLink>
                        <NavLink to="/Studentview" className="text-decoration-none text-light">Studentview&nbsp;</NavLink>
                    {/* </Nav> */}
                </Container>
            </Navbar>
        </>
    )
}

export default Header