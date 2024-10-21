import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from "../categories/CategoryList"
import ProductList from "../products//ProductList"


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row>
                    <Col xs="3">
                    <CategoryList/>
                    </Col>
                    <ProductList/>
                    <Col xs="9">
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;