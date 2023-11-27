import { GET_ALL_POKEMONS } from './actions-type';
import axios from "axios";

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/pokemons/");
            return dispatch({ type: GET_ALL_POKEMONS, payload: data });
        } catch (error) {
            console.log(error);
        }
    }
};
