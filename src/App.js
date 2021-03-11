import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Newcom from "./Newcom";
import Header from "./Header/Header";
import Liton from "./Liton";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  return (
    
    
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={Liton}/>
        <Route path="/newcom" exact component={Newcom}/>
      </Switch>
        

      </Router>
    
  );
};

export default App;
