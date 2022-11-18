import React, { useState, useEffect } from 'react';
import { Button, Card, Image } from "semantic-ui-react";
import MovieInfoModal from './MovieInfoModal';

const MovieCard = ({ title, poster, year, movieId, username }) => {
// state value to track when modal is open or not
    const [open, setOpen] = useState(false);
    const [movie, setMovie] = useState({})
    const [inMyMovies, setInMyMovies] = useState(false)

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}`)
            .then(r => r.json())
            .then(movie => {
                setMovie(movie)
                console.log('detailed movie data fetched')
            })
        fetch(`http://localhost:9292/user_movies/${username}`)
        .then(resp => resp.json())
        .then(movies => {
            setInMyMovies(movies.find(film => film.movieId === movieId))
        })
        
        // else the fetch from our data for the MyMovies card modal
    }, [])

    function handleClick() {
        setOpen(open => !open)
    }

    const onAdd = (event, username, movie) => {
        const intYear = parseInt(movie.Year)
        event.stopPropagation()
        fetch(`http://localhost:9292/watch`, {
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                username: username,
                title: movie.Title,
                year: intYear,
                poster: movie.Poster,
                genre: movie.Genre,
                actors: movie.Actors,
                director: movie.Director,
                plot: movie.Plot,
                rated: movie.Rated,
                runtime: movie.Runtime,
                writer: movie.Writer,
                imdb_rating: movie.imdbRating,
                movieId: movieId
            })
        }).then(response => response.json())
        .then(() => setInMyMovies(true))
    }

    const onRemove = (event, username) => {
        console.log("movieId: ", movieId)
        event.stopPropagation()
        fetch(`http://localhost:9292/review/${username}/${movieId}`,{method:"DELETE"})
        .then(resp => resp.json())
        .then(() => setInMyMovies(false))
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
                {inMyMovies ?
                    <Card.Content extra>
                        <Button onClick={event => onRemove(event, username)}>Remove from MyMovies</Button>
                    </Card.Content>
                    :
                    <Card.Content extra>
                        <Button onClick={event => onAdd(event, username, movie)}>Add to MyMovies</Button>
                    </Card.Content>}
            </Card>
            <MovieInfoModal 
                open={open} 
                setOpen={setOpen} 
                movieId={movieId} 
                movie={movie}
            />
        </>
    )
};

export default MovieCard;

