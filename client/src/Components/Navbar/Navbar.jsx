import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Nav">
            <button className="Nav1" ><NavLink to='/'>Home</NavLink></button>
            <button className="Nav2" ><NavLink to='/games'>Games</NavLink></button>
            <button className="Nav3" ><NavLink to='/form'>Create Game</NavLink></button>
        </div>
    )
};

export default Navbar;