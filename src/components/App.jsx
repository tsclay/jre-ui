import React, {useEffect, useState} from 'react';
import prettier from "prettier/standalone";
import parserJson from "prettier/parser-babel";

import './App.css';

const App = () => {
  const [episodes, setEpisodes] = useState([])
  const [single, setSingle] = useState([{
    "guests": [
        "Ali Macofsky"
    ],
    "title": "#1526 - Ali Macofsky",
    "episode_id": 1526,
    "isMMA": false,
    "isFC": false,
    "description": "Ali Macofsky is an actress, writer, and standup comedian. Checkout her podcast \"Resting Bitch\" available on Apple Podcasts.",
    "date": "2020-08-15T04:00:00.000Z"
}])
  const fetchEpisodes = async () => {
    const response = await fetch('/api/all')
    const data = await response.json()
    setEpisodes(data)
  }

  useEffect(() => {
    fetchEpisodes()
  }
 , [] )

  
  return (
    <div className="App">
      <h1>JRE</h1>
      <p>An example of a returned JSON data</p>
      {episodes.map(e => (
        <div className="code">
        <pre>
          <code>

       
            {prettier.format(JSON.stringify(e), {parser: 'json-stringify', plugins: [parserJson], printWidth: 90})}
          
          </code>
        </pre>
      </div>
      ))}
      
    </div>
  );
}

export default App;
