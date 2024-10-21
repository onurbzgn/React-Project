import React, { Component } from 'react';
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table ,Button } from 'reactstrap'



class CartDetail extends Component {
    removefromCart(product){
        this.props.actions.removefromCart(product)
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity 
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row" >
                                    {cartItem.product.id}
                                </th>
                                <td>
                                    {cartItem.product.productName}
                                </td>
                                <td>
                                    {cartItem.product.unitPrice}
                                </td>
                                <td>
                                    {cartItem.quantity}
                                </td>
                                <td>
                                    <Button color='danger' onClick={() => this.removefromCart(cartItem.product)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removefromCart: bindActionCreators(cartActions.removefromCart, dispatch),
        }
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)