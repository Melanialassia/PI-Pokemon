import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = ({ setPaginate }) => {

  return (
    <div className="navBarContainer">
      <div className="searchBarContainer">
        <SearchBar setPaginate={setPaginate} />
      </div>
      <div className="createPokemonContainer">
        <Link to={"/create"}>
          <button className="createPokemonButton">Crear Pokemon</button>
        </Link>
      </div>
      <div>
      <div>
      <Link to={"/"}>
      <button className="exitButton"> Salir</button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default NavBar;