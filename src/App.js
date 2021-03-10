import React,{useState,useEffect} from 'react';
import Character from "./components/Character";
import axios from 'axios';
import './App.css';
import Button from './components/Button'
import styled from "styled-components"

const Wars = styled.div`
justify-content: space-between;
&:hover {
  color: FF00FF;
  font-size: 30px;
  transition: 0.5s all ease-in-out;
 

}
transition: 0.5s all ease-in-out;
`
const Main = styled.div`
text-decoration: block;
margin: 1px;
color:rgb(0, 162, 255);
cursor: pointer;
&:hover {
  color: #00008b;
  font-size: 20px;
  transition: 0.5s all ease-in-out;

}
transition: 0.5s all ease-in-out;
`


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
    setCharacters(res.data)
    console.log(characters)
     })
    .catch(err => console.log('something is wrong'))
  },[characters])
  return (
    <div className="App">
      <Wars>
      <h1 className="Header">REACT WARS</h1>
      </Wars>
      {
        characters.map((character) =>{
          return (
            <Main>
            <Character name = {character.name}/>
            <button onClick = {Button}>{character.birth_year} </button>
            </Main>
          )
        })
      }
  
    </div>
  );
}
export default App;
