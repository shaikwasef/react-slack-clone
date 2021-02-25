import React from "react";
import "./style.css";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Chat from "./components/Chat"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/room">
            Chat Page
            </Route>
            <Route path = "/">
              Login Page
            </Route>
          </Switch>
      </Router>
    </div>
  );
}
