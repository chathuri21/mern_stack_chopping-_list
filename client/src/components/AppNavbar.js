import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    // this.toggle = this.toggle.bind(this);
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                        <Nav className="mi-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/chathuri21">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        ); 
    }
  }

  export default AppNavbar;