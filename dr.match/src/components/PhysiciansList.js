import React from "react";
import { Outlet, Link } from "react-router-dom";

const PhysicianList = () => {
      return (
        <div>
            <header className="physician-list">
            </header>
          <h1>List of Physicians here</h1>
          <Link to="/PlantarTreatment">This looks like my condition!</Link>
        </div>
      );
    };

export default PhysicianList;