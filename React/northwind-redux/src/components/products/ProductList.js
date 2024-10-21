import React, { Component } from 'react';
import { connect } from "react-redux";
import { Badge, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productAction from "../../redux/actions/productsAction";
import { Table } from 'reactstrap'
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import { Link } from 'react-router-dom';



class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts()
    }

    addToCart=(product)=>{
        this.props.actions.addToCart({quantity:1,product})
        alertify.success(product.productName + " Added To Cart")
    }
    render() {
        return (
            <div>
                <h3>
                    <Badge color='danger'>Products</Badge>
                    <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>
                </h3>
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
                                Quantity Per Unit
                            </th>
                            <th>
                                Units In Stock
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr>
                                <th scope="row" >
                                    {product.id}
                                </th>
                                <td>
                                    
                                    <Link to={"/saveproduct/"+product.id}>{product.productName}</Link>
                                </td>
                                <td>
                                    {product.unitPrice}
                                </td>
                                <td>
                                    {product.quantityPerUnit}
                                </td>
                                <td>
                                    {product.unitsInStock}
                                </td>
                                <td>
                                    <Button color='success' onClick={()=>this.addToCart(product)}>
                                        Add Cart
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

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productsListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productAction.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch),

        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
