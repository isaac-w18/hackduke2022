import './App.css';
import Home from './components/Home.js';
import Symptoms from './components/Symptoms.js';
import PlantarFasciitis from './components/PlantarFasciitis.js';
import RelevantPhysicians from './components/RelevantPhysicians.js';
import PlantarTreatment from './components/PlantarTreatment.js';
import InsuranceDropDown from './components/InsuranceDropDown';
import Ibuprofen from './components/ibuprofen.js';
import Naproxen from './components/Naproxen.js';
import PhysiciansList from './components/PhysiciansList.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <>
     <Router >
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/symptoms" element={<Symptoms />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/} 
          <Route path="/plantar" element={<PlantarFasciitis />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/} 
          <Route path="/ibuprofen" element={<Ibuprofen />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/} 
          <Route path="/naproxen" element={<Naproxen />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/} 
          <Route path="/relevant" element={<RelevantPhysicians />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/} 
          <Route path="/PlantarTreatment" element={<PlantarTreatment />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/} 
          <Route path="/physicianslist" element={<PhysiciansList />} />

          <Route path="/InsuranceDropDown" element={<InsuranceDropDown />} />
          {/* If any route mismatchesx the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
