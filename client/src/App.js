import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"


function App() {
  return (
    <BrowserRouter>
   
  <div className="App">
  <Switch>
  <Route exact path = "/" component = {LandingPage} />
  <Route exact path = "/home" component = {Home} />
  </Switch>
     
  </div>
  </BrowserRouter>
)
}

export default App;
