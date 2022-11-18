import React, { useState, useEffect } from 'react';
import { Button, Card, Image } from "semantic-ui-react";
import MyMovieInfoModal from './MyMovieInfoModal';
import MovieReviewModal from './MovieReviewModal';

const MyMovieCard = ({ movie, movieId, review, userData }) => {
    // state value to track when modal is open or not
    const [open, setOpen] = useState(false);
    const [openReview, setOpenReview] = useState(false);

    const handleReviewClick = (e) => {
        e.stopPropagation()
        setOpenReview(openReview => !openReview)

    }

    function handleClick() {
        setOpen(open => !open)
    }

    return (
        <>
                <Card onClick={handleClick}>
                    <Image src={movie.poster}/>
                    <Card.Content>
                        <Card.Header>{movie.title}</Card.Header>
                        <Card.Meta>Released: {movie.year}</Card.Meta>
                    </Card.Content>
                    
                    <Card.Content extra>
                        <Button onClick={handleReviewClick}>Review</Button>
                    </Card.Content>
                </Card>
                <MyMovieInfoModal
                    open={open}
                    setOpen={setOpen}
                    movieId={movie.movieId}
                    movie={movie}
                    review={review}
                />
                <MovieReviewModal
                    open={openReview}
                    setOpen={setOpenReview}
                    movieId={movieId}
                    movie={movie}
                    review={review}
                    userData={userData}
                />
        </>
    )
};

export default MyMovieCard;