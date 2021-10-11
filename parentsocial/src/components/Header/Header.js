import React from 'react'
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  
  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">PARENTS SOCIAL</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/playDay/">Play-day</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/playDay/">Daycare</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Interview Clothing</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Interview-Prep</NavbarText>
            <NavItem>
                <NavLink href="/login">Logout</NavLink>
              </NavItem>
        </Navbar>
      </div>
    );
  }

export default Header
