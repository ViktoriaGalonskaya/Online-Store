import React from 'react';
import './App.css';
import Home from "./modules/home/index";
import { Switch, Route } from "react-router-dom";
import Catalog from "./modules/catalog/index";
import Product from "./modules/product/index";
import Bag from "./modules/bag/index";
import CustomerService from "./modules/customer-service/index";
import Contact from "./modules/contact/index";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/collections' component={Catalog}/>
            <Route path='/product' component={Product}/>
            <Route path='/bag' component={Bag}/>
            <Route path='/customerservice' component={CustomerService}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
  );
}

export default App;