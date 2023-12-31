import { Link } from "react-router-dom";
import "./Pokemon.css"; // Asegúrate de importar tu archivo CSS con estos estilos

const Pokemon = ({ id, name, image, types }) => {

  return (
    <div className="pokemonContainer">
      <Link className="namePokemonCard"
        to={`/detail/${id}`}>
        <img
          src={image}
          alt={name}
        />
        <h2 className="pokemonName">{name}</h2>
        <h5 className="types">Tipo
          <div className="types">{types.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
          </div>
        </h5>
      </Link>
    </div>
  );
};

export default Pokemon;



