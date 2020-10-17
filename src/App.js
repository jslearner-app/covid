import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Checker from "./components/Checker";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Main/>
        <Checker/>
        
       
        <Switch>
          <Route path='/' exact />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
