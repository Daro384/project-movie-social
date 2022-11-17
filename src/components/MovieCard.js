import React from 'react';
import { Button, Card, Image } from "semantic-ui-react";


const MovieCard = ({ title, poster, year, isFromSearch }) => {

    return (
        <>
            <Card>
                <Image src={poster} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>Released: {year}</Card.Meta>
                </Card.Content>
                {/* 
        conditionally render the extra card content,
        depending on boolean prop. 
        is this a search Movie card or My Movie card? 
        the two branching paths can also be functions that return JSX
        */}
                {isFromSearch ?
                    <Card.Content extra>
                        <Button>Like Movie</Button>
                    </Card.Content>
                    :
                    <Card.Content extra>
                        <Button>Rate Movie</Button>
                        <p>Placeholder User Review</p>
                    </Card.Content>}
            </Card>
        </>
    )
};

export default MovieCard;

