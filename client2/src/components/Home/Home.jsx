import './Home.css';
import logoPokemon from "../../img/pngegg.png";
import pokeball from "../../img/pokeball.gif";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTypes,
  getAllPokemons,
  orderName,
  orderAttack,
  filterPokemons,
  filterType,
} from '../../redux/actions/actions';
import Paginate from '../Paginate/Paginate';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';


const Home = () => {
  const allPokemons = useSelector((state) => state.pokemon);
  const allTypes = useSelector((state) => state.types);
  console.log("alltypes", allTypes);
  const notFound = useSelector((state) => state.notFound);
  const dispatch = useDispatch();

  // Paginado
  const [paginate, setPaginate] = useState(1);
  const [cantPokemons] = useState(12);
  const totalPages = Math.ceil(allPokemons.length / cantPokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const handlerOrderName = (event) => {
    event.preventDefault();
    if (event.target.value !== 'nombre') {
      dispatch(orderName(event.target.value));
      setPaginate(1);
    }
  };

  const handlerOrderAttack = (event) => {
    event.preventDefault();
    if (event.target.value !== 'ataque') {
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
    if (event.target.value !== 'tipos') {
      dispatch(filterType(event.target.value));
      setPaginate(1);
    }
  };

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(getAllPokemons());
  };

  return (
    <div className="homeContainer">
      <img src={logoPokemon} alt="Logo Pokemon" className="logoPokemon" />
      <NavBar />
      <div className="filterContainer">
        <button onClick={(e) => handlerClick(e)} className="reloadButton">
          Recargar
        </button>
        <select onChange={(event) => handlerTypes(event)}>
          <option value={'tipos'}>Tipos</option>
          <option value="all">todos</option>
          {allTypes?.map((e, index) => (
            <option key={index} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        <select onChange={(event) => handlerOrderAttack(event)}>
          <option value={'ataque'}>Ataque</option>
          <option value={'min'}>min</option>
          <option value={'max'}>max</option>
        </select>
        <select onChange={(event) => handlerOrderName(event)}>
          <option value={'nombre'}>Nombre</option>
          <option value={'A-Z'}>A - Z</option>
          <option value={'Z-A'}>Z - A</option>
        </select>
        <select onChange={(event) => handlerFilterPokemons(event)}>
          <option value={'all'}>Todos</option>
          <option value={'api'}>Api</option>
          <option value={'created'}>Creados</option>
        </select>
      </div>
      <div className="pokemonList">
      {allPokemons.length ? (
          <Cards allPokemons={allPokemons} paginate={paginate} cantPokemons={cantPokemons}/>
        ) : notFound ? (
          <div>
            <p> POKEMON NOT FOUND </p>
          </div>
        ) : (
          <div className="loadingContainer">
            <img src={pokeball} alt="pokeball" className="logoPokemon" />
            <p className="loadingText">Cargando...</p>
          </div>
        )}
      </div>
      <div className="paginationContainer">
        <Paginate paginate={paginate} setPaginate={setPaginate} totalPages={totalPages} />
      </div>  
    </div>
  );
};

export default Home;