import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login.js";
import styled from "styled-components";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
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

const Container = styled.div;
