import {
    GET_ALL_POKEMONS,
    GET_DETAIL_POKEMON,
    GET_NAME_POKEMON,
    GET_TYPES,
    CLEAN_DETAIL,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK,
    FILTER_POKEMONS
} from "../actions/actions-type";

const initialState = {
    allPokemons: [],
    pokemonDetail: {},
    pokemonFilter: [],
    types: []

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonFilter: action.payload

            }

        case GET_DETAIL_POKEMON:

            return {
                ...state,
                pokemonDetail: action.payload
            }


        case CLEAN_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }

        // case GET_NAME_POKEMON:
        //     return {
        //         ...state,
        //         pokemonName: action.payload
        //     }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case FILTER_TYPE:
            const filterTypes = action.payload === "all"
                ? [...state.allPokemons]
                : [...state.allPokemons].filter((p) => p.types.includes(action.payload))
            return {
                ...state,
                pokemonFilter: filterTypes
            }

        case ORDER_NAME:
            const sortName = action.payload === "A-Z"
                ? [...state.allPokemons].sort((a, b) => a.id - b.id)
                : [...state.allPokemons].sort((a, b) => b.id - a.id)
            return {
                ...state,
                pokemonFilter: sortName
            }

        case ORDER_ATTACK:
            const sortAttack = action.payload === "min"
                ? [...state.allPokemons].sort((a, b) => a.attack - b.attack)
                : [...state.allPokemons].sort((a, b) => b.attack - a.attack)
            return {
                ...state,
                pokemonFilter: sortAttack
            }

        case FILTER_POKEMONS:
            const filterApiOrDb = action.payload === "created"
                ? [...state.allPokemons].filter((e) => e.createPokemonDb)
                : [...state.allPokemons].filter((e) => !e.createPokemonDb)
            return {
                ...state,
                pokemonFilter: action.payload === "all" ? [...state.allPokemons] : filterApiOrDb
            }

        default:
            return {
                ...state
            }

    };
};

export default reducer;