import React from "react";
import { Outlet, Link } from "react-router-dom";
import './ibuprofen.css';
const ibuprofen = () => {
      return (
        <div>
            <header className="Ibuprofen-header">
            </header>
          <h1>Ibuprofen</h1>
          <p id="whatis">What is Ibuprofen?</p>
            <ul id = "wibuprofen">
                <li>Brand name: Advil, Motrin</li>
                <li>In the class of Non-Steroidal Anti-Inflammatory Drugs (NSAIDs)</li>
                <li>Used to relieve arthirtis, swelling, and minor pain</li>
                <li>Available over-the-counter and as prescription</li>
                <li>Generally very safe</li>
            </ul>
            <p id="whatis">How should I take Ibuprofen?</p>
            <ul id = "wibuprofen">
                <li>Oral tablet: 200mg every 4-6 hours, unless otherwise directed by a doctor</li>
                <li>Take with food if possible</li>
                <li>Risks: Occasionally causes stomach bleeding. Do not take if you’ve ever had heart disease/heart attack</li>
            </ul>
            <Link to="/PlantarTreatment">Back</Link>
        </div>
      );
    };

export default ibuprofen;