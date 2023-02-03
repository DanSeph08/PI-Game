import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearDetail, getById } from '../../Redux/Actions';
import Navbar from '../Navbar/Navbar'
import './Detail.css';
import '../Navbar/Navbar.css';

const DetailGame = () => {
    const dispatch = useDispatch();
    const gameDetail = useSelector(state => state.gameDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getById(id));

        return function () {
            dispatch(clearDetail())
        };

    }, [dispatch, id]);

    return (
        <div className='Conta'>
        <div id='NavId'>
            <Navbar />
        </div>
            <h3 className='DetailTitle'>Detail Game</h3>
            <p className='DetailName'>{gameDetail.name}</p>
            <img className='DetailImg' src={gameDetail.image} alt="Detail Game" width='500vw' height='250vh' />
            <p className='DetailDescr'>{gameDetail.descr}</p>
            <p className='DetailDate'>{gameDetail.date}</p>
            <p className='DetailRating'>{gameDetail.rating}</p>
            <p className='DetailPlatf'>{gameDetail.platforms?.map(plat=>plat.platform)}</p>
        </div>
    )
};

export default DetailGame;