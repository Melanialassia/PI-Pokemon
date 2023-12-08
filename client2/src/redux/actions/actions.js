import {
    GET_ALL_POKEMONS,
    GET_DETAIL_POKEMON,
    GET_NAME_POKEMON,
    GET_TYPES,
    CREATE_POKEMON,
    CLEAN_DETAIL,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK,
    FILTER_POKEMONS
} from './actions-type';
import axios from "axios";


export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemons/");
            return dispatch({ type: GET_ALL_POKEMONS, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getDetailPokemon = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemons/" + id)
            return dispatch({ type: GET_DETAIL_POKEMON, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getPokemonName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemons/?name=" + name);
            console.log("action", data);
            return dispatch({ type: GET_NAME_POKEMON, payload: data });
        } catch (error) {
            console.log(error);
        };
    }
};

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/types/', {});
            return dispatch({ type: GET_TYPES, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const createPokemon = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons/create', info)
            dispatch({ type: CREATE_POKEMON, payload: response.data });
            alert("Pokemon creado con exito");
            return response;
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    };
};

export const filterType = (payload) => {
    return {
        type: FILTER_TYPE,
        payload
    };
};

export const orderName = (order) => {
    return {
        type: ORDER_NAME,
        payload: order
    };
};

export const orderAttack = (payload) => {
    return {
        type: ORDER_ATTACK,
        payload
    };
};

export const filterPokemons = (payload) => {
    return {
        type: FILTER_POKEMONS,
        payload
    };
};

