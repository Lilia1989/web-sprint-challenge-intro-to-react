import React from 'react';
export default function Button(props){
    const {birth_year} = props;
    return (
        <h3>{props.birth_year}</h3>
    )
}