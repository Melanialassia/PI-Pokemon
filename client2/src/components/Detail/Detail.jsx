
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPokemon, cleanDetail } from "../../redux/actions/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getDetailPokemon(id));
        return () => dispatch(cleanDetail());
        // eslint-disable-next-line
      }, []);
    
    const pokemonDetail = useSelector((state) => state.pokemonDetail);

    return (
        <div>
            <h1>{pokemonDetail[0]?.name ? pokemonDetail[0].name : "null"}</h1>
            <img src={pokemonDetail[0]?.image} alt={pokemonDetail[0]?.name} style={{ maxWidth: "200px", maxHeight: "200px" }}/>
            <p>Tipo: {pokemonDetail[0]?.types.join(" ")}</p>
            <span>HP: {pokemonDetail[0]?.hp}</span>
            <br />
            <span>Ataque: {pokemonDetail[0]?.attack}</span>
            <br />
            <span>Defensa: {pokemonDetail[0]?.defense}</span>
            <br />
            <span>Velocidad: {pokemonDetail[0]?.speed}</span>
            <br />
            <span>Altura: {pokemonDetail[0]?.height}</span>

        </div>
    )
};

export default Detail;