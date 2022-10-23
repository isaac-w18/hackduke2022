import React from "react";

import drMatch from './drMatch.png';

console.log(drMatch);

// import '../App.css';
// importing Link from react-router-dom to navigate to 
// different end points.
const Home = () => {
  return (
    <div>
      <div>
        <header className="App-header">
        <img src={drMatch} alt="drMatch"></img>
        <h1>Dr. Match</h1> 
        </header>
      </div>
      <div>
      </div>
    </div>
  );
};
  
export default Home;