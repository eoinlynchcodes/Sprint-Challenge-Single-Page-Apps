import React from "react";
import styled from 'styled-components';

const Box = styled.div`
border: 1px solid black;
color: blue;
font-family: New Courier;
margin: 0 auto;
padding: 50px 50px;
font-size: 1rem;
`

export default function CharacterCard(props) {

  return (
    <Box>
        Name:
        <h1>{props.item.name}</h1>
        Status:
        <h1>{props.item.status}</h1>
        Species
        <h1>{props.item.species}</h1>
        Location:
        <h1>{props.item.location.name}</h1>
        <img src={props.item.image}/>
    </Box>
  );
}
