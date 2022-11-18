import React from "react"
import { Button, Image, Modal } from 'semantic-ui-react'
import AddReview from "./AddReview"

const MovieReviewModal = ({ open, setOpen, movie, movieId, review }) => {

    return (
        <Modal open={open}>
            <Modal.Header>Review {movie.title}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={movie.poster} wrapped />
                <Modal.Content>
                    <AddReview setOpen={setOpen} movie={movie} review={review} />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal.Actions>
            </Modal.Content>
        </Modal>
    )
}

export default MovieReviewModal;