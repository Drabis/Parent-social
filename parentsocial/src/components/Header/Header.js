import React from 'react'
import Daycare from "../../pages/Daycare/Daycare";
import { useState } from 'react';
import "./styles.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    
  } from 'reactstrap';
  
  const Header = (props) => {
    

  
    return (
      <div className="header">
        <Navbar color="" light expand="lg">
          <NavbarBrand className="navbarBrand" href="/home"><h1>PARENTS SOCIAL</h1></NavbarBrand>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">About-Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/playDate">Play-Date</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/daycare">Daycare</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/interview-prep">Interview-Prep</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/interview-clothes">Interview Clothing</NavLink>
              </NavItem>
            </Nav>  
            <Nav>
            <NavItem className="logout">
                <NavLink href="/">Logout</NavLink>
              </NavItem>
              </Nav>
        </Navbar>
        
      </div>
    );
  }

export default Header
