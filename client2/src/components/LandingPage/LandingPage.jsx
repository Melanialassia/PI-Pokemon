import { Link } from 'react-router-dom';
import "./LandingPage.css";
import logoPokemon from "../../img/pngegg.png"

const LandingPage = () => {
    return (
        <div className="landingPage">
            <img src={logoPokemon} alt="Logo Pokemon" className="logoPokemon" />
            <Link to='/home'>
                <button className="enterButton">Enter</button>
            </Link>
        </div>
    );
};

export default LandingPage;