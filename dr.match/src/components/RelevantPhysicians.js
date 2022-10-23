import React from "react";
import ReactDOM from "react-dom";
import "./RelevantPhysicians.css";


import DrVishwanathHande from './DrVishwanathHande.png';
import DrBethAppiah from './DrBethAppiah.png';
import DrBrianEdwards from './DrBrianEdwards.png';

const relevant = () => {
    return (
        <div>
            <header className="Relevant-header">
            </header>
            <p id="relTopMes">Here are relevant physicians we found for you!</p>
            <img id="vish" src={DrVishwanathHande} alt="DrVishwanathHande"></img>
            <h4 id="vishwanath">Dr. Vishwanath Hande</h4>
            <p id="vishwanath">InStride Foot & Ankle</p>

            <img id="beth" src={DrBethAppiah} alt="DrBethAppiah"></img>
            <h4 id="bethA">Dr. Beth Appiah</h4>
            <p id="bethA">InStride Foot & Ankle</p>

            <img id="brian" src={DrBrianEdwards} alt="DrBrianEdwards"></img>
            <h4 id="brianE">Dr. Brian Edwards</h4>
            <p id="brianE">Physical Therapist</p>
        </div>
    );
};

export default relevant;