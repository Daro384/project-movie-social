import './App.css';
import Navbar from './components/Navbar.js'
import './components/Navbar.css'
import Movies from './pages/Movies.js'
import MyMovies from './pages/MyMovies.js'
import OtherUsers from './pages/OtherUsers.js'
import Login from './pages/Login.js'
import UserMovies from "./pages/UserMovies"
import { Route, Routes } from 'react-router-dom'
import React,{useState} from 'react';

function App() {

  const [username, setUsername] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login setUsername={setUsername}/>} />
            <Route path="/MyMovies" element={<MyMovies username={username}/>} />
            <Route path="/Movies" element={<Movies />} />
            <Route exact path="/OtherUsers" element={<OtherUsers />} />
            <Route path="/OtherUsers/:username" element={<UserMovies />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
