import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUsername}) => {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    let onSubmit = event => {
        event.preventDefault()
        setUsername(name)
        navigate(`/MyMovies`)
    }

    return (
    <>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <label>Username:
            <input
                type="text"
                onChange={e => setName(e.target.value)}
            />
            </label>
            <input type="submit"/>
        </form>
    </>
    )
};

export default Login;