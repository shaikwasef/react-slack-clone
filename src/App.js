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
          <Main>
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange;
  display : grid ;
  grid-template-rows :38px auto;
`;

const Main = styled.div`
  background-color : blue ;

`;
