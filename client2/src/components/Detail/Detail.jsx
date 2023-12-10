import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailPokemon, cleanDetail } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import "./Detail.css"
import charmander from "../../img/charmander.gif";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemonDetail = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getDetailPokemon(id));
        return () => dispatch(cleanDetail());
    }, []);

    return (
        <div className="detailContainer">
            <div >
                <Link to={"/home"} className="backButton">
                    <button>Volver</button>
                </Link>
            </div>
            <div className="pokemonCard">
              {
                Object.keys(pokemonDetail).length > 0 ? (
                    <div >
                        <h1>{pokemonDetail.name ? pokemonDetail.name : "No encontrado"}</h1>
                        <img
                            src={pokemonDetail.image}
                            alt={pokemonDetail.name}
                            style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                        <br/>
                        <p>Tipo: {pokemonDetail.types.join(" ")}</p>
                        <p>HP: {pokemonDetail.hp}</p>
                        <p>Ataque: {pokemonDetail.attack}</p>
                        <p>Defensa: {pokemonDetail.defense}</p>
                        <p>Velocidad: {pokemonDetail.speed}</p>
                        <p>Altura: {pokemonDetail.height}</p>
                    </div>
                ) : (
                    <div >
                        <img src={charmander} alt="charmander" />
                        <p>cargando...</p>
                    </div>
                )
            }  
            </div>
            
        </div>
    );
};

export default Detail;