import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/Home'
import Product from './pages/Product'
import Discription from './pages/Discription'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

import './App.css';

function App() {



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Cart />
        <Switch>
          <Route path="/discription/:id">
            <Discription />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
