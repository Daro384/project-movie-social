import React,{useState, useEffect} from 'react';
// import MovieInfo from "../components/MovieInfo"
import SearchForm from '../components/SearchForm'
import MovieCard from '../components/MovieCard';
import { Card } from "semantic-ui-react";
import MovieInfoModal from '../components/MovieInfoModal';

const Movies = ({username}) => {

    
    const [movieResults, setMovieResults] = useState({});
    

    return (
        <div>
            <h1>Movies</h1>
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
                   return <MovieCard key={`${movie.Title}-${movie.Year}`} title={movie.Title} poster={movie.Poster} year={movie.Year} movieId={movie.imdbID} username={username}/>
                // return <MovieInfoModal movieId={movie.imdbID}></MovieInfoModal>
                })}
                {/* <pre>{JSON.stringify(movieResults, null, 10)}</pre> */}
            </Card.Group>
        </div>
    )
};

export default Movies;