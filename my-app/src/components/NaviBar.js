import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NaviBar.css';

class NaviBar extends Component {
    render() {
        return (
            <Navbar expand="lg">
            {/* <Navbar.Brand  href="/">Home</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            {/* <Form className="form-center">
              <FormControl type="text" placeholder="Search" className="" />
            </Form> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/post">Post</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NaviBar
