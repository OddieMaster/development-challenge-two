import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Patients from "./pages/Patients";
import Insert from "./pages/Insert";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Route component={NavBar} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/patients" exact component={Patients} />
          <Route path="/insert" exact component={Insert} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
