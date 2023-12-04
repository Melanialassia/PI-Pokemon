import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div>
            <Link to={"/create"}>
            <button>New Pokemon +</button>
            </Link>
            <SearchBar/>
        </div>

    );
};

export default NavBar;