import { GET_ALL_POKEMONS } from "../actions/actions-type";

const initialState = {
    pokemons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;