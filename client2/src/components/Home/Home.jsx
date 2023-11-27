import SearchBar from "../SearchBar/SearchBar";
import Pokemons from "../Pokemons/Pokemons";
//dependencies
import axios from "axios";
//Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllPokemons } from "../../redux/actions/actions";


const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons());
    }, []);

    const onSearch = async (name) => {
        try {
            const URL = 'http://localhost:3001/pokemons'
            const { data } = await axios(URL + `?name=${name}`);

            if (data.name) {
                const pokemonName = setPokemons((oldPokemons) => {
                    [...oldPokemons, data]
                    return pokemonName
                });
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            throw Error(error.message)
        }
    };


    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>Filtar</button>
            <button>Ordenar</button>
            <Pokemons  />
        </nav>
    )
};

export default Home;