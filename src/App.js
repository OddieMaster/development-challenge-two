import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Consult from "./pages/Consult";
import "./App.css"



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/consult" exact component={Consult} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
