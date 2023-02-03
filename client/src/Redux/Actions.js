import axios from 'axios';

export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_ALL_PLAT = 'GET_ALL_PLAT';  
export const POST_GAME = 'POST_GAME';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const ERROR = 'ERROR';

export const getAllGames = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/games');
            const games = response.data;
            return dispatch({
                type: GET_ALL_GAMES,
                payload: games
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
};

export const getById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/games/${id}`);
            const gameId = response.data;
            return dispatch({
                type: GET_BY_ID,
                payload: gameId
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
}; 

export const getByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/games?search=' + name);
            const gameName = response.data;
            return dispatch({
                type: GET_BY_NAME,
                payload: gameName
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
};

export const getAllGenres = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/genres');
            const genres = response.data;
            return dispatch({
                type: GET_ALL_GENRES,
                payload: genres
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
}; 

export const getAllPlatforms = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/platforms');
            const platforms = response.data;
            return dispatch({
                type: GET_ALL_PLAT,
                payload: platforms
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
};

export const postForm = (body) => {
    return async function (dispatch) {
        await axios.post('http://localhost:3001/game', body);
        dispatch({
            type: POST_GAME,
        })
    }
};

export const clearDetail = () => {
    return { type: CLEAR_DETAIL };
};

