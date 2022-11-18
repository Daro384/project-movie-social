import React from "react"
import { Button, Image, Modal } from 'semantic-ui-react'

const MyMovieInfoModal = ({ open, setOpen, movie, review }) => {
    // console.log(movie)

    return (
        <Modal open={open}>
            <Modal.Header>{movie.title}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={movie.poster} wrapped />
                <Modal.Description>
                    <p>Genre: {movie.genre}</p>
                    <p>Actors: {movie.actors}</p>
                    <p>Year: {movie.year}</p>
                    <p>Director: {movie.director}</p>
                    <p>Plot: {movie.plot}</p>
                    <p>Rated: {movie.rated}</p>
                    <p>Runtime: {movie.runtime}</p>
                    <p>Writer: {movie.writer}</p>
                    <p>IMDb Rating: {movie.imdb_rating}</p>
                    <p>My Rating: {review.rating}</p>
                    <p>My Review: {review.review}</p>

                </Modal.Description>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal.Actions>
            </Modal.Content>
        </Modal>
    )
}

export default MyMovieInfoModal;