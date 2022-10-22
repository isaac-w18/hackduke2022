import './App.css';
import Home from './components/Home.js';
import Symptoms from './components/Symptoms.js';
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
        
          {/* If any route mismatchesx the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}

        </Routes>
      </Router>
    </>
    
  );
}

export default App;
