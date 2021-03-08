import React,{useState,useEffect} from 'react';
import Character from "./components/Character";
import axios from 'axios';
import './App.css';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people `)
    .then(res=>{
    setCharacters(res.body)
    console.log(characters)
     })
    .catch(err => console.log('something is fishy'))
  },[])
  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {characters.length > 0 ? 
     characters.map((character) => {
          return (
              <Character name={character.name}  index={character.index} />
          );
     }): "loading"
}
    </div>
  );
}
export default App;
