import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Patients from "./pages/Patients";
import Insert from "./pages/Insert";
import NavBar from "./components/NavBar";
import Doctors from "./pages/Doctors";
import Exams from "./pages/Exams";
import "./App.css";

function App() {
    return (
        <Router>
            <Route component={NavBar} />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/patients" component={Patients} />
                <Route path="/insert" component={Insert} />
                <Route path="/doctors" component={Doctors} />
                <Route path="/exams" component={Exams} />
            </Switch>
        </Router>
    );
}

export default App;
