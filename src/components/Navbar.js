import React from 'react';
import { Link, useMatch, useResolvedPath} from 'react-router-dom'

const Navbar = () => {

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end:true })
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }

    return (
        <nav className="nav">
            <div className="site-title">Movies Social</div>
            <ul>
                <CustomLink to="/">Login</CustomLink>
                <CustomLink to="/MyMovies">My Movies</CustomLink>
                <CustomLink to="/Movies">Movies</CustomLink>
                {/* <CustomLink to="/OtherUsers">Other Users</CustomLink> */}
            </ul>
        </nav>
    )
};

export default Navbar;