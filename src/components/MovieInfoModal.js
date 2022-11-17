import React from "react"
import { Button, Image, Modal } from 'semantic-ui-react'

const MovieInfoModal = ({ open, setOpen, movie }) => {

    return (
        <Modal open={open}>
            <Modal.Header>{movie.Title}</Modal.Header>
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
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal.Actions>
            </Modal.Content>
        </Modal>
    )
}

export default MovieInfoModal;