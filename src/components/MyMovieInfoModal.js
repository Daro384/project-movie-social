import React from "react"
import { Button, Image, Modal } from 'semantic-ui-react'
import './MyMovieInfoModal.css'

const MyMovieInfoModal = ({ open, setOpen, movie, review }) => {
    // console.log(movie)

    return (
        <Modal open={open}>
            <Modal.Header>
                {movie.title}
                <Modal.Actions id="btn-container">
                    <Button onClick={() => setOpen(false)}>X</Button>
                </Modal.Actions>
            </Modal.Header>
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
            </Modal.Content>
        </Modal>
    )
}

export default MyMovieInfoModal;