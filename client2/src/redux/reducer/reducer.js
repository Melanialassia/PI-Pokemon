import {
    GET_ALL_POKEMONS,
    GET_DETAIL_POKEMON,
    CLEAN_DETAIL,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK,
    FILTER_POKEMONS
} from "../actions/actions-type";

const initialState = {
    allPokemons: [],
    pokemonDetail: {}

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }
        case GET_DETAIL_POKEMON:
            console.log("En el reducer - Receiving Pokémon details - action.payload:", action.payload);
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }
        case FILTER_TYPE:
            return {

            }
        case ORDER_NAME:
            const sortName = action.payload === "A-Z"
                ? [...state.allPokemons].sort((a, b) => a.id - b.id)
                : [...state.allPokemons].sort((a, b) => b.id - a.id)
            return {
                ...state,
                allPokemons: sortName
            }
        case ORDER_ATTACK:
            const sortAttack = action.payload === "min"
                ? [...state.allPokemons].sort((a, b) => a.attack - b.attack)
                : [...state.allPokemons].sort((a, b) => b.attack - a.attack)
            return {
                ...state,
                allPokemons: sortAttack
            }
        case FILTER_POKEMONS:
            const filterApiOrDb = action.payload === "created"
                ? [...state.allPokemons].filter((e) => e.createPokemonDb)
                : [...state.allPokemons].filter((e) => !e.createPokemonDb)
            return {
                ...state,
                allPokemons: action.payload === "all" ? [...state.allPokemons] : filterApiOrDb
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;