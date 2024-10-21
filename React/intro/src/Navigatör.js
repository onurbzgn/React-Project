import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';
import {Link} from "react-router-dom"

function Navigatör(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <div>
      <Navbar color='primary' expand ="md">
        <NavbarBrand>Nortwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
              <Link style={{ color: 'black', textDecoration: 'none' }} to="form1">Form 1 Demo</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link style={{ color: 'black', textDecoration: 'none' }} to="form2">Form 2 Demo</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary removeFromCart={props.removeFromCart} cart={props.cart}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigatör;