import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login.js";

export default function App() {
  return (
    <div className="App">
      <Router>
       <Container>
       <header />
          <Switch>
            <Route path="/room">
              <Chat />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}
