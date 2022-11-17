import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUsername}) => {
    const [name, setName] = useState("")
    const navigate = useNavigate()

    let onSubmit = event => {
        event.preventDefault()
        fetch("http://localhost:9292/users")
        .then(response => response.json())
        .then(users => {
            if (!users.find(user => user.username == name)) {
                fetch("http://localhost:9292/users", {
                    method:"post",
                    headers:{"content-type":"application/json"},
                    body: JSON.stringify({username:name})
                })
                .then(resp => resp.json())
                .then(() => {
                    setUsername(name)
                    navigate(`/MyMovies`)
                })}
            else {
                setUsername(name)
                navigate(`/MyMovies`)
            }
        })
        
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