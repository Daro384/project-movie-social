import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const OtherUsers = () => {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    //move to separate file later
    const UserCard = ({name, movieTitle, movieURL, rating}) => {

        const handleClick = () => {
            navigate(`/OtherUsers/${name}`)
        }

        return (
            <div onClick={handleClick}>
                <h3>{name}</h3>
                <img src={movieURL} alt={movieTitle}/>
                <p>stars: {rating}</p>
            </div>
        )
    }

    const findHighestRatedMovie = reviewArray => {
        return reviewArray.sort((a, b) => {
            return b.rating - a.rating
        })[0]
    }

    const displayUsers = users.map(user => {
        const hasReviews = Boolean(user.reviews[0]) //checks if user has any reviews
        const bestReview = hasReviews ? findHighestRatedMovie(user.reviews) : "No reviews"
        const title = hasReviews ? bestReview.movie.title : "N/A"
        const URL = hasReviews ? bestReview.movie.img_url : "N/A"
        const rating = hasReviews ? bestReview.rating : "N/A"
        
        return <UserCard 
            key={user.username} 
            name={user.username} 
            movieTitle={title}
            movieURL={URL}
            rating={rating}
        />
    })

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then(resp => resp.json())
        .then(setUsers)
    },[])
    
    return (
        <>
            <h1>Other Users</h1>
            {displayUsers}
        </>

    )
};

export default OtherUsers;