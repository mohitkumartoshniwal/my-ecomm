import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.componenet';
import {Route , Switch } from 'react-router-dom';
import  ShopPage from './pages/shop/shop.component';




function App() {
  return (
    <div>
      {/* Switch used for rendering only one route when matched */}
      <Switch> 
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
     
    </div>
  );
}

export default App;