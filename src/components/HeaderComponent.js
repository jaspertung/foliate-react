import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Foliate</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink className="nav-link" to="/guide">
                                Guide
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/reminders">
                                Reminders
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        )
    }
}

export default Header
