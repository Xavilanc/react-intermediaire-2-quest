import './App.css';
import SimpsonsQuote from './components/SimpsonsQuote';
import axios from 'axios';
import React, {useState} from 'react';

const sampleSimpson = {
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  quote: "Ha ha!",
  characterDirection: "Left",
}

function App() {

  const [simpsons, setSimpsons] = useState(sampleSimpson);
  const getSimpsons = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => response.data)
    .then((data) => {
      setSimpsons(data[0]);
    });
  };

  return (
    <div className="App">
      <SimpsonsQuote simpsons={simpsons}/>
      <button type="button" onClick={getSimpsons}>Get Simpsons</button>
    </div>
  );
}

export default App;
