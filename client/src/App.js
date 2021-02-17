import logo from './logo.svg';
import './App.css';
import React from "react";
import Router from './Router';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
