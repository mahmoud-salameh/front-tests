import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap/'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Favorit">Favorit</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
