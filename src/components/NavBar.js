import React from 'react';
import { NavLink } from 'react-router-dom';
import ConnectedUser from './ConnectedUser';

const Navbar = () => (
    <nav>
        <ul className="container d-flex align-items-center">
            <li>
                <NavLink to="/" exact activeClassName='active-route'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/add"  activeClassName='active-route'>New Question</NavLink>
            </li>
            <li>
                <NavLink to="/leaderboard"  activeClassName='active-route'>Leader Board</NavLink>
            </li>

            <li className="authed-user">
                <ConnectedUser />
            </li>
        </ul>
    </nav>
)


export default Navbar;