import React,{useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import MyMovieCard from '../components/MyMovieCard';

const MyMovies = ({username}) => {
    const [userData, setUserData] = useState([])

    useEffect(() => 
    {
        fetch(`http://localhost:9292/users/${username}`)
        .then(resp => resp.json())
        .then(setUserData)
    }, [])


    const movieContainer = userData.reviews?.map(review => {
        return <MyMovieCard key={review.id} movie={review.movie}/>
    })

    return (
        <>
            <h1>My Movies</h1>
            {movieContainer}
        </>
    )
}

export default MyMovies;