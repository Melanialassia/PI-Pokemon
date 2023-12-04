import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="searchBarContainer">
        <SearchBar />
      </div>
      <div className="createPokemonContainer">
        <Link to={"/create"}>
          <button className="createPokemonButton">Crear Pokemon</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;