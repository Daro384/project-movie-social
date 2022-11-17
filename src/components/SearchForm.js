import React, { useEffect, useState } from "react";

function SearchForm({ handleSubmit, setMovieResults }) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
         
        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`)
            .then(r => r.json())
            .then(setMovieResults)       
    }


    

    return (
        <section id="search-form">
            <form onSubmit={ handleSubmit }>
                <label> Search for a Movie 
                    <br/>
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        className="movie-name"
                        type="text"
                        value={input}
                    />
                </label>
                <br/>
                <button type="submit">Find a Movie!</button>
            </form>
        </section>
    );
}

export default SearchForm;

