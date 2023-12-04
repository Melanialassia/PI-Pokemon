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
    const allPokemons = useSelector((state) => state.pokemon);
    const allTypes = useSelector((state) => state.types);
    const notFound = useSelector((state) => state.notFound);
    const dispatch = useDispatch();

    //Paginado
    const [paginate, setPaginate] = useState(1); // la pagina
    const [cantPokemons] = useState(12); // cantidad de pokemones que se van a mostrar por pagina
    const totalPages = Math.ceil(allPokemons.length / cantPokemons);// la cantidad de pagina que van a existir


    useEffect(() => {
        if(!allPokemons.length){
            dispatch(getAllPokemons());
            dispatch(getTypes());
        }     
    }, []);

    const handlerOrderName = (event) => {
        event.preventDefault();
        if(event.target.value !== "nombre"){
           dispatch(orderName(event.target.value)); 
           setPaginate(1);
        }
        
    };

    const handlerOrderAttack = (event) => {
        event.preventDefault();
        if(event.target.value !== "ataque"){
           dispatch(orderAttack(event.target.value)); 
           setPaginate(1);
        }  
    };

    const handlerFilterPokemons = (event) => {
        event.preventDefault();
        dispatch(filterPokemons(event.target.value));
        setPaginate(1);
    };

    const handlerTypes = (event) => {
        event.preventDefault();
        if(event.target.value !== "tipos"){
           dispatch(filterType(event.target.value)); 
           setPaginate(1);
        }   
    };


    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <select onChange={(event) => handlerTypes(event)}>
                    <option value={"tipos"}>Tipos</option>
                    <option value="all">todos</option>
                    {
                        allTypes?.map((e, index) => (
                            <option key={index} value={e.name}>
                                {e.name}
                            </option>
                        ))
                    }
                </select>
                <select onChange={(event) => handlerOrderAttack(event)}>
                    <option value={"ataque"}>Ataque</option>
                    <option value={"min"}>min</option>
                    <option value={"max"}>max</option>
                </select>
                <select onChange={(event) => handlerOrderName(event)}>
                    <option value={"nombre"}>Nombre</option>
                    <option value={"A-Z"}>A - Z</option>
                    <option value={"Z-A"}>Z - A</option>
                </select>
                <select onChange={(event) => handlerFilterPokemons(event)}>
                    <option value={"all"}>Todos</option>
                    <option value={"api"}>Api</option>
                    <option value={"created"}>Creados</option>
                </select>
            </div>
            <div>
                {
                    allPokemons.length ? (
                        allPokemons.slice(
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
                                />
                            )
                        })
                    ) : notFound ? (
                        <div>
                            <p> POKEMON NOT FOUND </p>
                        </div>
                    ) : (
                        <div>
                            <p> cargando... </p>
                        </div>
                    )
                }

            </div>
            <div>
                <Paginate paginate={paginate} setPaginate={setPaginate} totalPages={totalPages} />
            </div>
        </div>
    )
};

export default Home;