import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({onSearch}) => {
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
};

export default NavBar;