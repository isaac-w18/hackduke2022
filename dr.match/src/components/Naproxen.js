import React from "react";
import { Outlet, Link } from "react-router-dom";
const naproxen = () => {
      return (
        <div>
            <header className="Naproxen-header">
            </header>
          <h1>Naproxen</h1>
          <p id = "whatis">What is Naproxen?</p>
            <ul id = "wnaproxen">
                <li>Brand name: Aleve</li>
                <li>In the class of Non-Steroidal Anti-Inflammatory Drugs (NSAIDs)</li>
                <li>Relieves arthirtis, swelling, stiffness, and joint pain</li>
                <li>Available over-the-counter and as prescription</li>
                <li>Available in tablets and capsules</li>
                <li>Generally very safe</li>
            </ul>
            <p  id = "whatis">How should I take Naproxen?</p>
            <ul id = "wnaproxen">
                <li>Joint conditions: 500mg to 1,000mg a day</li>
                <li>Muscle and bone disorders and pains: 500mg at first, then 250mg every 6 to 8 hours as needed.</li>
                <li>Attacks of gout: 750mg, then 250mg every 8 hours until the attack has passed.</li>
                <li>Potential side-effects include headaches and stomach pain</li>
            </ul>
            <Link to="/PlantarTreatment">Back</Link>
        </div>
      );
    };

export default naproxen;