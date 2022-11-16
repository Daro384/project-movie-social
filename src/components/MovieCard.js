import React from "react";

const MovieCard = ({title, img_url, rating}) => {
    return (
        <>
            <img src={img_url} alt={title}/>
            <p>Stars: {rating}</p>
        </>
    )
}

export default MovieCard