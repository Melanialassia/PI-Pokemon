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
import Pokemon from '../Pokemon/Pokemon';
import Paginate from '../Paginate/Paginate';
import NavBar from '../NavBar/NavBar';


const Home = () => {
  const allPokemons = useSelector((state) => state.pokemon);
  const allTypes = useSelector((state) => state.types);
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

  const handlerClick = (event) => {
    event.preventDefault();
    dispatch(getAllPokemons());
  };

  return (
    <div className="homeContainer">
      <img src={logoPokemon} alt="Logo Pokemon" className="logoPokemon" />
      <NavBar />
      <div className="filterContainer">
        <button onClick={(event) => handlerClick(event)} className="reloadButton">
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
          allPokemons.slice(
            (paginate - 1) * cantPokemons,
            (paginate - 1) * cantPokemons + cantPokemons)
            .map((p) => (
              <Pokemon
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.image}
                types={p.types}
              />
            ))
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