import React from 'react';
import { Button, Card, Image } from "semantic-ui-react";


const MovieCard = ({ title, poster, year }) => {

   return (
    <>
    <Card>
        <Image src={poster}/>
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>Released: {year}</Card.Meta>
        </Card.Content>
        {/* 
        conditionally render the extra card content,
        depending on boolean prop. 
        is this a search Movie card or My Movie card? 
        */}
        <Card.Content extra>
            <Button>Like Movie</Button>
        </Card.Content>
    </Card>
    </>
   )
};

export default MovieCard;

