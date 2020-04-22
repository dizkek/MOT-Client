import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from "./containers.module.css";
import Login from './Login';

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

export default App;
