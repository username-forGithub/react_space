import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
<ul className="nav-ul">
    <li>
        <NavLink end to="/" className="home-link">
            Rocket
        </NavLink>
    </li>
    <li>
        <NavLink  to="dragons" className="mission-link">
            Dragon
        </NavLink>
    </li>
    <li>
        <NavLink  to="profile" className="profile-link">
            Profile
        </NavLink>
    </li>
</ul>
);

export default Navbar;