import NavBar from "../NavBar/NavBar"
import Pokemons from "../Pokemons/Pokemons";
//Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
//actions
import {
    getTypes,
    getAllPokemons,
    orderName,
    orderAttack,
    filterPokemons,
    filterType
} from "../../redux/actions/actions";


const Home = () => {
    const allPokemons = useSelector((state) => state.pokemon);
    const allTypes = useSelector((state) => state.types);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getTypes());
    }, []);

    const handlerOrderName = (event) => {
        dispatch(orderName(event.target.value));
    };

    const handlerOrderAttack = (event) => {
        dispatch(orderAttack(event.target.value));
    };

    const handlerFilterPokemons = (event) => {
        dispatch(filterPokemons(event.target.value));
    };

    const handlerTypes = (event) => {
        dispatch(filterType(event.target.value));
    };

    return (
        <div>
            <NavBar />
            <select onChange={handlerTypes}>
                <option>Tipos</option>
                <option value="all">Todos</option>
                {
                    allTypes?.map((e, index) => (
                        <option key={index} value={e.name}>
                            {e.name}
                        </option>
                    ))
                }
            </select>
            <select onChange={handlerOrderAttack}>
                <option >Ataque</option>
                <option value={"min"}>min</option>
                <option value={"max"}>max</option>
            </select>
            <select onChange={handlerOrderName}>
                <option value={"A-Z"}>A - Z</option>
                <option value={"Z-A"}>Z - A</option>
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