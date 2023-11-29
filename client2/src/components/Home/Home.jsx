import NavBar from "../NavBar/NavBAr";
import Pokemons from "../Pokemons/Pokemons";
//dependencies
import axios from "axios";
//Hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import {
    getAllPokemons,
    orderName,
    orderAttack,
    filterPokemons
} from "../../redux/actions/actions";


const Home = () => {
    const allPokemons = useSelector((state) => state.allPokemons);
    const [pokemons, setPokemons] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch]);

    const onSearch = async (name) => {
        try {
            const URL = 'http://localhost:3001/pokemons'
            const { data } = await axios(URL + `?name=${name}`);

            if (data.name) {
                setPokemons((oldPokemons) => [...oldPokemons, data]);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            throw Error(error.message)
        }
    };

    const handlerOrderName = (event) => {
        dispatch(orderName(event.target.value));
    };

    const handlerOrderAttack = (event) => {
        dispatch(orderAttack(event.target.value));
    };

    const handlerFilterPokemons = (event) => {
        dispatch(filterPokemons(event.target.value))
    };

    return (
        <div>
            <NavBar onSearch />
            <select>
                <option>Tipos</option>
                <option>Todos</option>
            </select>
            <select onChange={handlerOrderAttack}>
                <option >Ataque</option>
                <option value={"min"}>min</option>
                <option value={"max"}>max</option>
            </select>
            <select onChange={handlerOrderName}>
                <option value={"A-Z"}>A-Z</option>
                <option value={"Z-A"}>Z-A</option>
            </select>
            <select onChange={handlerFilterPokemons}>
                <option value={"all"}>Todos</option>
                <option value={"api"}>Api</option>
                <option value={"created"}>Creados</option>
            </select>

            <Pokemons allPokemons={allPokemons} />
        </div>
    )
};

export default Home;