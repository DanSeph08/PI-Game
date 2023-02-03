import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlatforms, getAllGenres, postForm } from "../../Redux/Actions";
import Navbar from '../Navbar/Navbar';
import './Form.css';


const validate = (input) => {
    let errors = {};
    
    if ((!input.name)) {
        errors.name = 'Name is required';
    } else if (/^[A-Z0-9-]+$/i.test(input.name)) {
        errors.name = 'Name is invalid'
    }
    if ((!input.descrip)) {
        errors.descrip = 'Description is required';
    }
    return errors;
};

const Form = () => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    

    useEffect(() => {
        dispatch(getAllGenres())
        dispatch(getAllPlatforms())
    },[dispatch])

    const [input, setInput] = useState({
        name: "",
        descrip: "",
        date: "",
        rating: 0,
        imagen: "",
        genre: "",
        platf: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        descrip: "",
    });

    const handleInputChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setInput({
            ...input, [property]: value
        });
        setErrors(validate({
            ...input, [property]: value
        }));
    };

    const handleCLickSubmit = () => {
        dispatch(postForm(input));
    };

    return (
        <div>
            <div id='NavId'>
                <Navbar />
            </div>

            <form className="Cont">
                <h3 className="TitleForm">Create Your Game</h3>
            <div className="Name">
                <label className="FormName" htmlFor='name'>Name: </label>
                <input type='text' id="FormButName" name='name' value={input.name} className={errors.name && "danger"} onChange={handleInputChange} />
                {errors.name && <p className="dangerus"> {errors.name} </p>}
            </div>
            <div className="Descr">
                <label className="FormDescrip" htmlFor='descrip'>Description: </label>
                <input type='text' id="FormButDescrip" name='descrip' value={input.descrip} className={errors.descrip && "danger"} onChange={handleInputChange} />
                {errors.descrip && <p className="dangerus"> {errors.descrip} </p>}
            </div>
            <div className="Date">
                <label className="FormDate" htmlFor='date'>Date: </label>
                <input type='date' id="FormButDate" name='date' value={input.date} onChange={handleInputChange} />
            </div>
            <div className="Rat">
                <label className="FormRating" htmlFor='rating'>Rating: </label>
                <input id="FormButRating" type='number' name='rating' value={input.rating} onChange={handleInputChange} min='0' max='5' />
            </div>
            <div className="Img">
                <label className="FormImg" htmlFor="imagen">Imagen:</label>
                <input id="FormButImg" type='file' name='imagen' accept='image/*' value={input.imagen} onChange={handleInputChange} />
            </div>
            <div className="Genres">
                <label className="FormGenre" htmlFor='genres'>Genres: </label>
                <select className="FormButGenre" multiple name="genres">
                    {genres.map(genre => <option
                        key={genre.id}
                        value={input.genre}
                        onChange={handleInputChange}> {genre.name} </option>)}
                </select>
            </div>
            <div className="Platf">
                <label className="FormPlatf" htmlFor="platforms">Platforms: </label>
                <select className="FormButPlatf" multiple name="platforms">
                    {platforms.map(unid => <option
                        key={unid.id}
                        value={input.platf}
                        className={errors.platf && "danger"}
                        onChange={handleInputChange}> {unid.name} </option>)}
                </select>
            </div>
    
            <button className="ButSubmit" type='submit' onClick={handleCLickSubmit}> Create New Game</button>
        </form>
        
        </div>
    )
};

export default Form;