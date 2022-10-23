import React from "react";
import { Outlet, Link } from "react-router-dom";

const plantar = () => {
      return (
        <div>
            <header className="Plantar-header">
            </header>
          <h1>Plantar Fasciitis</h1>
          <p>Symptoms:</p>
            <ul>
                <li>Pain in the arch and/or heel of the foot</li>
                <li>Tenderness and swelling</li>
                <li>Inflammation</li>
            </ul>
            <p>Causes:</p>
            <ul>
                <li>Pain in the arch and/or heel of the foot</li>
                <li>Tenderness and swelling</li>
                <li>Inflammation</li>
            </ul>
          <Link to="/PlantarTreatment">This looks like my condition!</Link>
        </div>
      );
    };

export default plantar;