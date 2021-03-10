// Write your Character component here
import React from 'react';
export default function Character(props){
    const {name} = props;
    return (
        <h2>{props.name}</h2>
      )
   }
