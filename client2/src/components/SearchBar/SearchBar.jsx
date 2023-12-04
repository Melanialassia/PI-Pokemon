import { useState } from "react";
import { useDispatch} from "react-redux";
import { getPokemonName } from "../../redux/actions/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [namePokemon, setNamePokemon] = useState("");

    const handleChange = (event) => {
        setNamePokemon(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(getPokemonName(namePokemon));
        console.log(namePokemon);
    };

    return (
        <div>
            <input 
            type="search"
            placeholder="Ingrese Pokemon..." 
            onChange={(event) => handleChange(event)} 
             value={namePokemon}/>
            <button type="submit" onClick={() => handleSubmit(namePokemon)}>Buscar</button>
        </div>
    );
};

export default SearchBar;