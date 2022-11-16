import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import './components/Navbar.css'
import Movies from './pages/Movies.js'
import MyMovies from './pages/MyMovies.js'
import OtherUsers from './pages/OtherUsers.js'
import Login from './pages/Login.js'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/MyMovies" element={<MyMovies />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/OtherUsers" element={<OtherUsers />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
