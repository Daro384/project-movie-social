import React, { useState, useEffect } from 'react';
import { Button, Card, Image } from "semantic-ui-react";
import MovieInfoModal from './MovieInfoModal';

const MyMovieCard = ({ movie }) => {
    // state value to track when modal is open or not
        const [open, setOpen] = useState(false);
        function handleClick() {
            setOpen(open => !open)
        }

        return (
            <>
                <Card onClick={handleClick}>
                    <Image src={movie.poster} />
                    <Card.Content>
                        <Card.Header>{movie.title}</Card.Header>
                        <Card.Meta>Released: {movie.year}</Card.Meta>
                    </Card.Content>
                    {/* 
            conditionally render the extra card content,
            depending on boolean prop. 
            is this a search Movie card or My Movie card? 
            the two branching paths can also be functions that return JSX
            */}
                </Card>
                <MovieInfoModal 
                    open={open} 
                    setOpen={setOpen} 
                    movieId={movie.movieId} 
                    movie={movie}
                />
            </>
        )
    };
    
    export default MyMovieCard;