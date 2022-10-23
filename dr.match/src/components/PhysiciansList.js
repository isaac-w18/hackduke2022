import React from "react";
import { Outlet, Link } from "react-router-dom";

const PhysicianList = () => {
      return (
        <div>
            <header className="physician-list">
            </header>
          <h1>List of Physicians here</h1>
          <Link to="/PlantarTreatment">This looks like my condition!</Link>

          var img = document.createElement("img");
          img.src = "drMatch.png";

          var div = document.getElementById("x");
          div.appendChild(img);
          //block.setAttribute("style", "text-align:center");
        </div>
      );
    };

export default PhysicianList;