import React from "react";
import { useNavigate } from "react-router-dom";


import drMatch from './drMatch.png';
import './logo.css'

console.log(drMatch);

// import '../App.css';
// importing Link from react-router-dom to navigate to 
// different end points.
const Home = () => {
  const navigate = useNavigate();
  const onSubmit = event => {
      navigate('/plantar')
  }
  return (
    <div >
      <div>
        <header className="App-header">
        <img src={drMatch} alt="drMatch" className = "photo"></img>
        {/* <h1>Dr. Match</h1>  */}
        <form onSubmit={onSubmit}>

        <label>
          Tell us about your symptoms:
        <input type="text" className = "input"/>
        </label>
        <button type='submit' >Submit</button>
        </form>
        </header>
      </div>
      <div>
      </div>
    </div>
  );
};
  
export default Home;