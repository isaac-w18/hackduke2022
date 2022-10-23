import React from "react";
import DrVishwanathHande from './DrVishwanathHande.png';
import DrBethAppiah from './DrBethAppiah.png';
import DrBrianEdwards from './DrBrianEdwards.png';
console.log(DrVishwanathHande);

const relevant = () => {
    return (
        <div>
            <header className="Relevant-header">
            </header>
            <p>Here are relevant physicians we found for you!</p>
            <img src={DrVishwanathHande} alt="DrVishwanathHande"></img>
            <img src={DrBethAppiah} alt="DrBethAppiah"></img>
            <img src={DrBrianEdwards} alt="DrBrianEdwards"></img>
            <h4 id="vishwanath">Dr. Vishwanath Hande</h4>
            <h4 id="beth">Dr. Beth Appiah</h4>
            <h4 id="brian">Dr. Brian Edwards</h4>
            <p id="vishwanath">InStride Foot & Ankle</p>
            <p id="beth">InStride Foot & Ankle</p>
            <p id="brian">Physical Therapist</p>
        </div>
    );
};

export default relevant;