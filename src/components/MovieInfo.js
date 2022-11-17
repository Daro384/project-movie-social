import React,{useState} from "react"

const MovieInfo = ({movieObject}) => {

    const [review, setReview] = useState("")
    const [rating, setRating] = useState(null)

    const onSubmitReview = event => {
        event.preventDefault()
        fetch(`http://localhost:9292/movies/${movieObject.title}`)
        //create a review on the back end
        //link the review to the user
        //link movie to review
    }

    return (
        <div>
            <h1>{movieObject.Title}</h1>
            <div>
                <p><b>Genre:</b> {movieObject.Genre}</p>
                <p><b>Actors:</b> {movieObject.Actors}</p>
                <p><b>Story:</b> {movieObject.Plot}</p>
            </div>

            <form onSubmit={onSubmitReview}>
                <label>Create review

                    <input type="text" onChange={e => setReview(e.target.value)}/>
                    
                    <select onChange={e => setRating(e.target.value)}>
                        <option value={0}>☆☆☆☆☆</option>
                        <option value={1}>★☆☆☆☆</option>
                        <option value={2}>★★☆☆☆</option>
                        <option value={3}>★★★☆☆</option>
                        <option value={4}>★★★★☆</option>
                        <option value={5}>★★★★★</option>
                    </select>

                    <input type="submit" value="Submit Review"/>
                </label>
            </form>

            <img src={movieObject.Poster} alt={movieObject.Title}/>
        </div>
        
    )
}

export default MovieInfo