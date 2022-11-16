import React, { useState } from "react";

function SearchForm() {
    const [input, setInput] = useState([]);
    // const [movie, setMovie] = useState([]);

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${input}`)
            .then(r => r.json())
            .then(console.log);
    }


    return (
        <section id="search-form">
            <form onSubmit={ handleSubmit }>
                <label> Search Movie 
                    <br/>
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        className="movie-name"
                        type="text"
                        value={input}
                    />
                </label>
                <br/>
                <button type="submit">Add To My Movies</button>
            </form>
        </section>
    );
}

export default SearchForm;

