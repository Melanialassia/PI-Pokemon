import { Link } from "react-router-dom";

const Pokemon = ({id, name, image, types}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img scr={image} alt={name} />
            <h5>{types}</h5>
        </div>
    )
};

export default Pokemon