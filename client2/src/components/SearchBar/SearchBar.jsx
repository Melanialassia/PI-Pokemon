import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions/actions";
import "./SearchBar.css"; // Importa el archivo CSS

const SearchBar = () => {
  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState("");

  const handleChange = (event) => {
    setNamePokemon(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPokemonName(namePokemon));
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Ingrese Pokemon..."
        onChange={(event) => handleChange(event)}
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;