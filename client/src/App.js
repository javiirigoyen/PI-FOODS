import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import RecipeCreate from "./components/RecipeCreate"
import Detail from './components/Detail';


function App() {
  return (
   <div className="App">

  <Route exact path = "/" component = {LandingPage}/>
  <Route path = "/home" component = {Home}/>
  <Route path = "/recipe" component = {RecipeCreate}/>
  <Route exact path="/detail/:id" component={Detail}/>
  
     </div>
  
)
}

export default App;
