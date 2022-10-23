import React from "react";
import '../App.css';
// importing Link from react-router-dom to navigate to 
// different end points.
const Home = () => {
  return (
    <div className="App">
      <div>
        <header className="App-header">
        </header>
      </div>
      <div>
        <h1>Dr. Match</h1> 
        <img src="../../public/drMatch.png" alt="Your go-to physician finder."></img>
      </div>
    </div>
  );
};
  
export default Home;