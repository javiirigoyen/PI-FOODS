import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import RecipeCreate from "./components/RecipeCreate"


function App() {
  return (
   <div className="App">

  <Route exact path = "/" component = {LandingPage} />
  <Route path = "/home" component = {Home} />
  <Route path = "/recipe" component = {RecipeCreate} />
  
     </div>
  
)
}

export default App;
