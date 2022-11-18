import React,{ useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MyMovieCard from "../components/MyMovieCard";

const UserMovies = () => {

    const [user, setUser] = useState({reviews:[]})
    const {username} = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${username}`)
        .then(response => response.json())
        .then(setUser)
    },[])

    const movieCards = user.reviews.map(review => {
        console.log(review)
        return <MyMovieCard key={review.id} movie={review.movie}/>
    })

    return (
        <>
            <h1>{user.username}'s Movies</h1>
            {movieCards}
        </>
    )
}

export default UserMovies
