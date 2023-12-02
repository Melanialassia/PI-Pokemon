import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonName } from "../../redux/actions/actions";

const SearchBar = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const pokemonName = useSelector((state) => state.pokemonName);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(getPokemonName(name));
    };

    return (
        <div>
            <input type="search" onChange={(event) => handleChange(event)} value={name} />
            <button onClick={() => handleSubmit(name)}>Buscar</button>
        </div>
    );
};

export default SearchBar;