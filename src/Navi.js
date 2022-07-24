import React from 'react';
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

export default class Navi extends React.Component {
  
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Shopping App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/form1">Form Demo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Qyinara">GitHub</NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
              
            </Nav>
          </Collapse>
        </Navbar>
        <br></br>
      </div>
    );
  }
}