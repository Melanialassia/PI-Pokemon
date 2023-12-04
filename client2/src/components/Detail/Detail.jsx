
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPokemon, cleanDetail } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector((state) => state.detail);
 
    useEffect(() => {
        dispatch(getDetailPokemon(id));
        return () => dispatch(cleanDetail());
    }, []);

    return (
        <div>
            {
                Object.keys(pokemonDetail).length > 0 ? (
                    <div>
                        <h1>{pokemonDetail.name ? pokemonDetail.name : "No encontrado"}</h1>
                        <img
                            src={pokemonDetail.image}
                            alt={pokemonDetail.name}
                            style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                        <p>Tipo: {pokemonDetail.types.join(" ")}</p>
                        <span>HP: {pokemonDetail.hp}</span>
                        <br />
                        <span>Ataque: {pokemonDetail.attack}</span>
                        <br />
                        <span>Defensa: {pokemonDetail.defense}</span>
                        <br />
                        <span>Velocidad: {pokemonDetail.speed}</span>
                        <br />
                        <span>Altura: {pokemonDetail.height}</span>
                    </div>
                ) : (
                    <div>
                        <p>cargando...</p>
                    </div>
                )
            }
            <Link to={"/home"}>
            <button>Volver</button>
            </Link>
        </div>
    );
};

export default Detail;
