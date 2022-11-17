import React,{ useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const UserMovies = () => {

    const [user, setUser] = useState({reviews:[]})
    const {username} = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${username}`)
        .then(response => response.json())
        .then(setUser)
    },[])

    const movieCards = user.reviews.map(review => {
        return <MovieCard key={review.id} title={review.movie.title} img_url={review.movie.img_url} rating={review.rating}/>
    })
    return (
        <>
            <h1>{user.username}'s Movies</h1>
            {movieCards}
        </>
    )
}

export default UserMovies
