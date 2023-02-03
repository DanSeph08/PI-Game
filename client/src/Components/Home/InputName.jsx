import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getByName } from "../../Redux/Actions";
import './Css/InputName.css';

const InputName = () => {
    const dispatch = useDispatch();
    const gameName = useSelector(state => state.gameName);
    const [searchName, setsearchName] = useState('');

    const handleClickSubmit = (event) => {
        event.preventDefault();
        dispatch(getByName(searchName))
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        setsearchName(event.target.value);
    };

    return (
        <div className="InputName" >
            <form onSubmit={(event) => handleClickSubmit(event)}>
                
                <label className="TitleLabel" htmlFor="searching">
                    Games: {''}
                </label>

                <input className="Input" type="text" name='searching' placeholder="Search Games" onChange={(event) => handleInputChange(event)} value={searchName} />

                <button className="Butt" type="submit">Search</button>

            </form>
            <ul className="Ul" >
                {gameName.map((game) => {
                    return (
                        <li className="Li" >
                            <NavLink key={game.id} to={`/games/${game.id}`}>
                                <span className="Name" >{game.name}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default InputName;