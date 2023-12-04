import { Link } from "react-router-dom";

const Pokemon = ({ id, name, image, types }) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} style={{ maxWidth: "100px", maxHeight: "100px" }} />
                <h2>{name}</h2>
                <h5>Tipo: {types.join(" ")}</h5>
            </Link>
        </div>
    )
};

export default Pokemon;