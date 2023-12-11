import {
    GET_ALL_POKEMONS,
    GET_DETAIL_POKEMON,
    GET_NAME_POKEMON,
    GET_TYPES,
    CLEAN_DETAIL,
    CREATE_POKEMON,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK,
    FILTER_POKEMONS
} from "../actions/actions-type";

const initialState = {
    allPokemons: [],
    pokemon: [],
    types: [],
    detail: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemon: [...action.payload],
            }

        case GET_DETAIL_POKEMON:

            return {
                ...state,
                detail: action.payload
            }

        case CREATE_POKEMON:
        
            return {
                ...state,
                pokemon: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: {}
            }

        case GET_NAME_POKEMON:
                return {
                    ...state,
                    pokemon: action.payload
                
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case FILTER_TYPE:
            const filterTypes = action.payload === "all"
                ? state.allPokemons
                : state.allPokemons.filter((p) => p.types.includes(action.payload))
            return {
                ...state,
                pokemon: filterTypes
            }

        case ORDER_NAME:
            if (action.payload === "A-Z") {
                const orderByName = [...state.pokemon].sort((a, b) => a.name.localeCompare(b.name))
                return {
                    ...state,
                    pokemon: [...orderByName]
                }
            } else if (action.payload === "Z-A") {
                const orderByName = [...state.pokemon].sort((a, b) => b.name.localeCompare(a.name))
                return {
                    ...state,
                    pokemon: [...orderByName]
                }
            }

        case ORDER_ATTACK:
            const sortAttack = action.payload === "min"
                ? [...state.pokemon].sort((a, b) => a.attack - b.attack)
                : [...state.pokemon].sort((a, b) => b.attack - a.attack)
            return {
                ...state,
                pokemon: sortAttack
            }

        case FILTER_POKEMONS:
            if(action.payload === "api") {
                const apiPokemons = state.allPokemons.slice(0, 100);
                return {
                    ...state,
                    pokemon: apiPokemons
                };
            } else if( action.payload === "created") {
                const userCreatedPokemons = state.allPokemons.slice(100);
                return {
                    ...state,
                    pokemon:userCreatedPokemons
                };
            } else {
                return {
                    ...state,
                    pokemon: [...state.allPokemons]
                }
            }
        default:
            return {
                ...state
            }

    };
};

export default reducer;
