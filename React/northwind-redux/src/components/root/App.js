import Navi from '../navi/Navi';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import { Route,Routes } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

class App extends Component {
  render() {
    return (
     <Container>
       <Navi/>
       <Routes>
        <Route path='/'exact element={<Dashboard/>}/>
        <Route path='/product'exact element={<Dashboard/>}/>
        <Route path='/saveproduct/:productId'exact element={<AddOrUpdateProduct/>}/>
        <Route path='/saveproduct/'exact element={<AddOrUpdateProduct/>}/>
        <Route path='/cart'exact element={<CartDetail/>}/>
        <Route exact element={<NotFound/>}/>
       </Routes>
     </Container>
    );
  }
}

export default App;
