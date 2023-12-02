import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div>
            <Link to={"/create"}>
            <button>Crearte</button>
            </Link>
            <SearchBar/>
        </div>

    );
};

export default NavBar;