import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [jobs, updateJobs] = useState([]);

  const retrieveJobs = async () => {
    const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };
    const response = await axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code", config);
    const rawJobs = response.data;
    console.log(rawJobs)
    updateJobs(rawJobs);

  }

  useEffect(() => {
      window.onload = retrieveJobs;
  })

  return (
    <div className="App">
      <header className="App-header">
        devjobs


      </header>
    </div>
  );
}

export default App;
