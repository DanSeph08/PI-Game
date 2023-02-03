import React from "react";
import { useDispatch } from "react-redux";
import { getAllGames } from '../../Redux/Actions';
import './Css/AllGames.css';

const AllGames = () => {
    
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
    }
    return (
        <div className="All">
            <button className="But" onClick={(event)=>handleClick(event)}>All Games</button>
        </div>
    )
};

export default AllGames;
