import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/cartSummary';
import { Link } from 'react-router-dom';


function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='danger'>
        <NavbarBrand>  <Link to="/"> NorthWind Mağzası</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="md" navbar>
            <NavItem>
              <NavLink>
                <Link to="/saveProduct">Ürün ekle</Link> 
                </NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
            <CartSummary></CartSummary>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;