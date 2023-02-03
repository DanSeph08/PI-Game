import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../../Redux/Actions';
import { useEffect } from "react";
import AllGames from "./AllGames";
import Card from "./Card";
import InputName from './InputName';
import Page from './Page'
import Navbar from '../Navbar/Navbar';
import './Css/Home.css';
import './Css/InputName.css';
import './Css/Navigation.css';
import './Css/Container.css';


const Home = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games);

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch]);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [gameXPage] = useState(15);
    const indexOfLast = currentPage * gameXPage;
    const indexOfFirst = indexOfLast - gameXPage;
    const currentGame = games.slice(indexOfFirst, indexOfLast);
    
    const page = (pageNumber) => {
        setCurrentPage(pageNumber)  
    };  

    if (games.length) {
    return (
            <div>
            <h1 className="Home">All Games</h1> 
            <div className="Navigation">
                <Navbar />
                <InputName />
                <AllGames />
            </div>
            <div className="Container">
                {currentGame.map(game => <Card key={game.id} game={game} />)}
            </div>
                <Page games={games.length} gameXPage={gameXPage} page={page} />
            </div>
        )
    }
    else {
        return (
            <>
                <h2 className="Loading">Loading...</h2>
                <h6 className="Please">Please Wait</h6>
            </>
        )
    }
};

export default Home;