import React from 'react';
import { NavLink } from "react-router-dom";
import './Landing.css'


const LandingPage = () => {
    return (
        <div className="Landing">
            <h1 className='Title'>¡Welcome!</h1>
            <h2 className='Games'>World Games</h2>
            <button className='Buttom'><NavLink to='/games'>Games</NavLink></button>
        <div className='Pi'>
            <h5 className='Author'>PI Daniel Pinzón</h5>        
        </div>
        </div>
    )
};

export default LandingPage;
