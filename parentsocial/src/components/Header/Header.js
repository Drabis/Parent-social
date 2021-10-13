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
            <NavItem>
                <NavLink href="/login">Logout</NavLink>
              </NavItem>
        </Navbar>
      </div>
    );
  }

export default Header
