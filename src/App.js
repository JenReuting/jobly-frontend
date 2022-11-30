import React from "react";
import { getAllCompanies, getJobsForCompany } from "./API";
import JoblyApp from "./JoblyApp";

import './App.css';

/**
 * 
 * Props: None
 * 
 * State: None
 * 
 * @returns App component
 * 
 * App -> JoblyApp
 */
function App() {
  return (
    <div className="App">
      <JoblyApp />
    </div>
  );
}

export default App;
