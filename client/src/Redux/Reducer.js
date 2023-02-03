import {
    ERROR,
    GET_ALL_GAMES,
    GET_ALL_GENRES,
    GET_BY_ID,
    GET_BY_NAME,
    GET_ALL_PLAT,
    CLEAR_DETAIL,
} from './Actions';

const initialState = {
    games: [],
    genres: [],
    gameName: [],
    platforms: [],
    gameDetail: {},
    error: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_GAMES: 
            return {
                ...state,
                games: action.payload
            }
        case GET_ALL_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                gameDetail: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                gameName: action.payload
            }
        case GET_ALL_PLAT:
            return {
                ...state,
                platforms: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                gameDetail: {},
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return { ...state }; 
    }
};

export default rootReducer;