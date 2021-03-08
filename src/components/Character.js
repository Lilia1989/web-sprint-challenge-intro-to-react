// Write your Character component here
import React from 'react';
export default function Character(props){
    const [name,index] = props;
    return (
       <div>
        <Character name = {props.name}/>
       </div>
    )
   }
