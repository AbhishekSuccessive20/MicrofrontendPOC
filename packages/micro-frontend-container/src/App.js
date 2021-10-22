import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Login from './components/LoginApp';
import CRUD from './components/CrudApp';
import './App.css';

const App = () => {
  return (
  <Router>
    <div>
      <Switch>
        <Route path ='/login'>
          <div className= "service1__wrapper">
            <h3>Service  component</h3>
              <Login /> 
          </div>
        </Route>
        <Route path='/'>
          <div className= "service2__wrapper">
          <h3>Service 2 component</h3>
              <CRUD />
          </div>
        </Route>
      </Switch> 
    </div>
  </Router>
 
)}

export default App;