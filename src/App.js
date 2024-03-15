import React from "react"
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from "./Componets/Home";
import Aboute from "./Componets/Aboute";
import Services from "./Componets/Services";
import Contact from "./Componets/Contact";
import Policy from "./Componets/Policy";
import Error from "./Componets/Error";
import List from "./Componets/List";
import Footer from "./Componets/Footer";
function App() {
  return (
    <>
    <List/>
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/aboute" Component={Aboute}/>
    <Route path="/services" Component={Services}/>
    <Route path="/contcts" Component={Contact}/>
    <Route path="/policy" Component={Policy}/>
    <Route  Component={Error}/>
  </Routes>
  <Footer/>
    
    </>
    
  )
}
export default App;
