import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions/actions";
import "./SearchBar.css"; 

const SearchBar = () => {
  const dispatch = useDispatch();
  const [namePokemon, setNamePokemon] = useState("");

  const handleChange = (event) => {
    setNamePokemon(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(getPokemonName(namePokemon));
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Ingrese Pokemon..."
        onChange={(event) => handleChange(event)}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;