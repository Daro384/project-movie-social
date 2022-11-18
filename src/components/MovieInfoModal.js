import React from "react"
import { Button, Image, Modal } from 'semantic-ui-react'
import './MovieInfoModal.css'

const MovieInfoModal = ({ open, setOpen, movie }) => {

    return (
        <Modal open={open}>
            <Modal.Header>
                {movie.Title}
                <Modal.Actions id="btn-container">
                    <Button onClick={() => setOpen(false)}>X</Button>
                </Modal.Actions>
            </Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={movie.Poster} wrapped />
                <Modal.Description>
                    <p>Genre: {movie.Genre}</p>
                    <p>Actors: {movie.Actors}</p>
                    <p>Year: {movie.Year}</p>
                    <p>Director: {movie.Director}</p>
                    <p>Plot: {movie.Plot}</p>
                    <p>Rated: {movie.Rated}</p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Writer: {movie.Writer}</p>
                    <p>IMDb Rating: {movie.imdbRating}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default MovieInfoModal;