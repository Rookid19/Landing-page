import React from "react";
import Welcome from "./components/Welcome";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Invitation from "./components/Invitation";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/invitation">
            <Invitation />
          </Route>
          <Route path="/">
            <Welcome />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
