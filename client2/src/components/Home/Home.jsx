import NavBar from "../NavBar/NavBar"
import Pokemon from "../Pokemon/Pokemon";
import Paginate from "../Paginate/Paginate";
//Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
    const allPokemons = useSelector((state) => state.pokemonFilter);
    const allTypes = useSelector((state) => state.types);
    const dispatch = useDispatch();

    //Paginado
    const [paginate, setPaginate] = useState(1); // la pagina
    const [cantPokemons, setCantPaginate] = useState(12); // cantidad de pokemones que se van a mostrar por pagina
    const totalPages = Math.ceil(allPokemons.length / cantPokemons);// la cantidad de pagina que van a existir


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

    const refresh = () => {
        dispatch(getAllPokemons());
        setPaginate(1)
    }

    return (
        <div>
            <NavBar />
            <div>
                <button onClick={refresh}>Recargar</button>
            </div>
            <select onChange={(event) => handlerTypes(event)}>
                <option value="all">Todos</option>
                {
                    allTypes?.map((e, index) => (
                        <option key={index} value={e.name}>
                            {e.name}
                        </option>
                    ))
                }
            </select>
            <select onChange={(event) => handlerOrderAttack(event)}>
                <option >Ataque</option>
                <option value={"min"}>min</option>
                <option value={"max"}>max</option>
            </select>
            <select onChange={(event) => handlerOrderName(event)}>
                <option value={"A-Z"}>A - Z</option>
                <option value={"Z-A"}>Z - A</option>
            </select>
            <select onChange={(event) => handlerFilterPokemons(event)}>
                <option value={"all"}>Todos</option>
                <option value={"api"}>Api</option>
                <option value={"created"}>Creados</option>
            </select>
            {allPokemons?.slice(
                (paginate - 1) * cantPokemons,
                (paginate - 1) * cantPokemons + cantPokemons
            ).map((p) => {
                return (
                    <Pokemon
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        image={p.image}
                        types={p.types}
                    />)
            })}
            <Paginate paginate={paginate} setPaginate={setPaginate} totalPages={totalPages} />

        </div>
    )
};

export default Home;