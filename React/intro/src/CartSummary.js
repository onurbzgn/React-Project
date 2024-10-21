import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
} from 'reactstrap';

class CartSummary extends Component {
    renderSummmary() {
       return ( <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Your Cart
            </DropdownToggle>
            <DropdownMenu end>
                {this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                        <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}> x</Badge>
                        {cartItem.product.productName}
                        <Badge color='success'>{cartItem.quantity}</Badge>
                    </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart"> Go to cart</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    }
    renderEmptCart(){
        return(
        <NavItem>
            <NavLink>
                Empty Cart
            </NavLink>
        </NavItem>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length>0?this.renderSummmary():this.renderEmptCart()}
            </div>
        );
    }
}

export default CartSummary;