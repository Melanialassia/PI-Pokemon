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
    pokemon: [],
    types: [],
    detail: {},
    notFound: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemon: [...action.payload],
                notFound: false
            }

        case GET_DETAIL_POKEMON:

            return {
                ...state,
                detail: action.payload
            }


        case CLEAN_DETAIL:
            return {
                ...state,
                detail: {}
            }

        case GET_NAME_POKEMON:
            console.log("entre", action.payload);
            if (action.payload.error) {
                return {
                    ...state,
                    pokemon: [],
                    notFound: true
                }
            } else {

                return {
                    ...state,
                    pokemon: action.payload,
                    notFound: false
                }
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
                const orderByName = [...state.pokemon].sort((prev, next) => {
                    if (prev.name > next.name) return 1;
                    if (prev.name < next.name) return -1;
                    return 0;
                })
                return {
                    ...state,
                    pokemon: [...orderByName]
                }
            } else if (action.payload === "Z-A") {
                const orderByName = [...state.pokemon].sort((prev, next) => {
                    if (prev.name > next.name) return -1;
                    if (prev.name < next.name) return 1;
                    return 0;
                })
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
            const filterApiOrDb = action.payload === "created"
                ? state.allPokemons.filter((e) => e.createPokemonDb)
                : state.allPokemons.filter((e) => !e.createPokemonDb)
            return {
                ...state,
                pokemon: action.payload === "all" ? state.allPokemons : filterApiOrDb
            }

        default:
            return {
                ...state
            }

    };
};

export default reducer;
