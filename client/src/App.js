import logo from './logo.svg';
import './App.css';
import React from "react";
import Router from './Router';
import axios from 'axios';
import { AuthContextProvider } from './contexts/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router/>
    </AuthContextProvider>
  );
}

export default App;
