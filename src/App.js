import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.componenet';
import {Route , Switch } from 'react-router-dom';


const HatsPage=() =>(
  <div>Hats PAge</div>
)
 

function App() {
  return (
    <div>
      {/* Switch used for rendering only one route when matched */}
      <Switch> 
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
      </Switch>
     
    </div>
  );
}

export default App;