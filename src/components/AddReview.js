import React, { useState, useEffect } from 'react';
import { Rating } from 'semantic-ui-react'
import { Button, Form, TextArea } from 'semantic-ui-react'
// import ResultMovieCard from './ResultMovieCard';

const AddReview = ({ setOpen, movie, review }) => {
    // console.log(review)
    const [input, setInput] = useState(review.review);
    const [rating, setRating] = useState(review.rating);

    const handleRate = (e, { rating }) => {
        // console.log(rating)
        setRating(rating)
    }

    // console.log(movie)

    const handleSubmitReview = (e) => {
        e.preventDefault()
        setOpen(false)


        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                review: input,
                rating: rating,
                user_id: review.user_id,
                movie_id: review.movie_id,
            })
        })
        .then(r => r.json())
        .then(console.log)


    }

    return (
        <section id="review-form">
            <Form onSubmit={handleSubmitReview}>
                <Form.Field
                    id="comment"
                    label='Review'
                    control={TextArea}
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <Rating maxRating={5} onRate={handleRate} rating={rating}/>
                <br />
                <Button type="submit">Save</Button>
            </Form>
        </section>
    );
}

export default AddReview;
