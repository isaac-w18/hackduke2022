import React from "react";
import { Outlet, Link } from "react-router-dom";

const PlantarTreatment = () => {
      return (
        <div>
            <header className="treatment-header"></header>
            <div>
                <h1>Risk Factors and Treatment options</h1>
                <p>What might put you at risk for plantar?</p>
                <ul>
                    <li>Overuse</li>
                    <li>Obesity</li>
                    <li>Ill fitting shoes</li>
                </ul>
            </div>
            <div>
            <h1>Risk Factors and Treatment options</h1>
                <p>Treatment options</p>
                <ul>
                    <li>Rest</li>
                    <li>Ice</li>
                    <li>Compression</li>
                    <li>OTC Anti-Inflammatory Medication</li>
                    <ol type = "a" id = "bullet">
                        <Link to="/Ibuprofen"><li>Ibuprofen</li></Link>
                        <Link to="/Naproxen"><li>Naproxen</li></Link>
                    </ol>
                </ul>
            </div>
            <Link to="/InsuranceDropDown">Find physicians in my area</Link>
        </div>

      );
    };

export default PlantarTreatment;