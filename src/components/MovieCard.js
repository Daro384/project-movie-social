import React, { useState, useEffect } from 'react';
import { Button, Card, Image } from "semantic-ui-react";
import MovieInfoModal from './MovieInfoModal';

const MovieCard = ({ title, poster, year, isFromSearch, movieId }) => {
// state value to track when modal is open or not
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState({})

    useEffect(() => {
        if (isFromSearch) {
            fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`)
                .then(r => r.json())
                .then(setMovie)
                .then(console.log('detailed movie data fetched'))
        } 
        // else the fetch from our data for the MyMovies card modal
    }, [])

    function handleClick() {
        setOpen(open => !open)
    }

    return (
        <>
            <Card onClick={handleClick}>
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
                        <Button>Add to MyMovies</Button>
                    </Card.Content>
                    :
                    <Card.Content extra>
                        <Button>Rate Movie</Button>
                        <p>Placeholder User Review</p>
                    </Card.Content>}
            </Card>
            <MovieInfoModal 
                open={open} 
                setOpen={setOpen} 
                movieId={movieId} 
                isFromSearch={isFromSearch} 
                movie={movie}
            />
        </>
    )
};

export default MovieCard;

