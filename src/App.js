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
import {auth} from "./firebase"

export default function App() {

  const [rooms,setRooms] = useState([]);
  const [user , setUser] = useState(JSON.parse(localStorage.getItem('user'))) ;
  const [sideBarTheme , setSideBarTheme] = useState("#3E014B");

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

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  };

  const darkMode = () => {
    (sideBarTheme == "#3E014B")? setSideBarTheme("black") : setSideBarTheme("#3E014B") ;
  };


  return (
    <div className="App">
      <Router>
        {
          !user ? 
          <Login setUser = {setUser}/>
          :
          <Container>
            <Header signOut = {signOut} user = {user} darkMode = {darkMode}/>
            <Main>
              <SideBar rooms={rooms} sideBarTheme = {sideBarTheme} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user = {user}/>
                </Route>
                <Route>
                  Select or Create Channel
                </Route>
              </Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange;
  display: grid;
  grid-template-rows: 38px minmax(0,1fr);
`;

const Main = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns : 260px auto;
`;
