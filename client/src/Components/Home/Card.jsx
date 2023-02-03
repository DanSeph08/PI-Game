import React from 'react';
import { NavLink } from 'react-router-dom';
import './Css/Cards.css'

const Card = ({game}) => {
    return(
        <div className='Cards' >
            <h3 className='GameName'> {game.name} </h3>
            <NavLink to={`/games/${game.id}`}> <img className='GameImg' src={game.background_image} alt="VideoGames" width='350vw' height='250vh'/> </NavLink>
            <p className='GameGenres'>{game.genres}</p>
        </div>
    )
};

export default Card;