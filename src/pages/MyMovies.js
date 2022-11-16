import React,{useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';

const MyMovies = ({username}) => {
    const [userData, setUserData] = useState([])

    useEffect(() => 
    {
        fetch(`http://localhost:9292/users/${username}`)
        .then(resp => resp.json())
        .then(setUserData)
    }, [])
    
    console.log(userData)

    const movieContainer = userData.reviews?.map(review => {
        return <MovieCard key={review.id} title={review.movie.title} img_url={review.movie.img_url} rating={review.rating}/>
    })

    return (
        <>
            <h1>My Movies</h1>
            {movieContainer}
        </>
    )
}

export default MyMovies;