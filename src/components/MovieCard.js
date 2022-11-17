import React,{useState, useEffect} from 'react';
import { Button, Card, Image } from "semantic-ui-react";


const MovieCard = ({ title, poster, year, username}) => {

    const [seen, setSeen] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:9292/user_movies/${username}`)
        .then(resp => resp.json())
        .then(movies => {
            setSeen(movies.find(movie => movie.title === title && movie.year === parseInt(year)))
        })
    },[])

    const onWatched = (title, poster, year, username) => {
        fetch(`http://localhost:9292/watch`, {
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                username: username,
                title: title,
                year: year,
                img_url: poster
            })
        }).then(response => response.json())
        .then(() => setSeen(true))
    }

    
        

    return (
        <>
            <Card>
                <Image src={poster} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>Released: {year}</Card.Meta>
                </Card.Content>
                {/* 
        conditionally render the extra card content,
        depending on boolean prop. 
        is this a search Movie card or My Movie card? 
        the two branching paths can also be functions that return JSX
        */}
                {seen ?
                <Card.Content extra>
                    <Button>Rate Movie</Button>
                    <p>Placeholder User Review</p>
                </Card.Content>
                    :
                <Card.Content extra>
                    <Button onClick={() => onWatched(title, poster, year, username)}>Watch</Button>
                </Card.Content>}
            </Card>
        </>
    )
};

export default MovieCard;

