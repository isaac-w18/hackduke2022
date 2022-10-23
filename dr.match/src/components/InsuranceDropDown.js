import {React, useState} from "react";
import { Outlet, Link, Form, useNavigate } from "react-router-dom";

const insurance = ["Cigna", "BlueCross/BlueShield", "Aetna"];
const InsuranceDropDown = () => {
  const [selected,setSelected] = useState();
  const navigate = useNavigate();
  const onSubmit = event => {
    navigate('/relevant')
}
      return (
        <div>
            {/* <header className="Insurance-drop-down">
            </header> */}
          <h1>Select your insurance to find a provider:</h1>
          <form onClick = {onSubmit}>
            <select value = {selected} onChange = {(e) => setSelected(e.target.value)}>
              {insurance.map((value) => 
              (<option vaue={value} key={value}>
                {value}
              </option>)
              )}
              
            </select>
          </form>
        </div>
      );
    };

export default InsuranceDropDown;