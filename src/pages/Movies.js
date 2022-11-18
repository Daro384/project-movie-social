import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm'
import ResultMovieCard from '../components/ResultMovieCard';
import { Card } from "semantic-ui-react";

const Movies = ({ username }) => {


    const [movieResults, setMovieResults] = useState({});


    return (
        <div>
            <h1>Search for Movies</h1>
            <SearchForm
                setMovieResults={setMovieResults}
                movieResults={movieResults}
            />
            {/* 
            TODO: below can be moved to a new component. 
            Something like: MovieCollection 
            */}
            <Card.Group itemsPerRow={5}>
                {movieResults.Search?.map(movie => {
                    return <ResultMovieCard
                        key={`${movie.Title}-${movie.Year}`}
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year}
                        movieId={movie.imdbID}
                        username={username} />
                })}
                {/* <pre>{JSON.stringify(movieResults, null, 10)}</pre> */}
            </Card.Group>
        </div>
    )
};

export default Movies;