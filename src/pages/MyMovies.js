import React, { useState, useEffect } from 'react';
import MyMovieCard from '../components/MyMovieCard';
import { Button, Card, Image } from "semantic-ui-react";

const MyMovies = ({ username, inMyMovies, setInMyMovies }) => {
    const [userData, setUserData] = useState([])
    // console.log(username, 'outside effect')

    useEffect(() => {
        // skip first render
        // console.log(username, 'inside effect')
        fetch(`http://localhost:9292/users/${username}`)
            .then(resp => resp.json())
            .then(setUserData)
    }, [])

    const movieContainer = userData.reviews?.map(review => {
        
        return <MyMovieCard
            key={review.id}
            movie={review.movie}
            movieId={review.movie_id}
            review={review}
            userData={userData}
        />
    })

    return (
        <>
            <h1>My Movies</h1>
            <Card.Group items={MyMovieCard} centered>
                {movieContainer}
            </Card.Group>
        </>
    )
}

export default MyMovies;