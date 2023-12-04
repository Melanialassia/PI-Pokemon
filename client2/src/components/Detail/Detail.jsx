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
        <div >
            <div >
                <Link to={"/home"}>
                    <button>Volver</button>
                </Link>
            </div>
            {
                Object.keys(pokemonDetail).length > 0 ? (
                    <div >
                        <h1>{pokemonDetail.name ? pokemonDetail.name : "No encontrado"}</h1>
                        <img
                            src={pokemonDetail.image}
                            alt={pokemonDetail.name}
                            style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                        <p>Tipo: {pokemonDetail.types.join(" ")}</p>
                        <p>HP: {pokemonDetail.hp}</p>
                        <br />
                        <p>Ataque: {pokemonDetail.attack}</p>
                        <br />
                        <p>Defensa: {pokemonDetail.defense}</p>
                        <br />
                        <p>Velocidad: {pokemonDetail.speed}</p>
                        <br />
                        <p>Altura: {pokemonDetail.height}</p>
                    </div>
                ) : (
                    <div >
                        <img />
                        <p>cargando...</p>
                    </div>
                )
            }
        </div>
    );
};

export default Detail;