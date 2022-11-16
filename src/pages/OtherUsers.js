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
        const bestReview = findHighestRatedMovie(user.reviews)
        return <UserCard 
            key={user.username} 
            name={user.username} 
            movieTitle={bestReview.movie.title}
            movieURL={bestReview.movie.img_url}
            rating={bestReview.rating}
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