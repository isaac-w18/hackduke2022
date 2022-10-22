import React from "react";
import '../App.css';
// importing Link from react-router-dom to navigate to 
// different end points.
import logo from '../logo.svg'
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};
  
export default Home;
