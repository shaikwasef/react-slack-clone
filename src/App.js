import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login.js";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import db from './firebase';
import {useEffect , useState} from "react";

export default function App() {

  const [rooms,setRooms] = useState([]);

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot)=> {
      setRooms(snapshot.docs.map((doc)=>{
          return {
              id : doc.id,
              name : doc.data().name
          }}
      ))
  })};

  useEffect(() => {
    getChannels();
  } , []);

  console.log(rooms);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <SideBar rooms = {rooms}/>
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
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns : 260px auto;
`;
