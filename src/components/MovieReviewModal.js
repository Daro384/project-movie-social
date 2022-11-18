import React from "react"
import { Button, Image, Modal } from 'semantic-ui-react'
import AddReview from "./AddReview"
import './MovieReviewModal.css'

const MovieReviewModal = ({ open, setOpen, movie, movieId, review }) => {

    return (
        <Modal id="modal" open={open}>
            <Modal.Header>
                Review {movie.title}
                <Modal.Actions id="btn-container">
                    <Button onClick={() => setOpen(false)}>X</Button>
                </Modal.Actions>
            </Modal.Header>
            <Modal.Content image>
                <Image id="review-img" size='medium' src={movie.poster} wrapped />
                <Modal.Content>
                    <AddReview setOpen={setOpen} movie={movie} review={review} />
                </Modal.Content>
            </Modal.Content>
        </Modal>
    )
}

export default MovieReviewModal;