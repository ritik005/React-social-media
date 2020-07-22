import React, { Component } from 'react';
import styles from './App.module.css';
import Navbar from "./components/Navbar";
import { SignUp, Login } from "./components"

class App extends Component{
render(){
  return (
      <div>
        <Navbar />
        <SignUp />
        <Login />
      </div>
  );
}
}

export default App;
