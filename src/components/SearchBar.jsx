import { FaSearch } from "react-icons/fa";

function SearchBar({search, setSearch, handleSearch}) {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search latest news..."/>
        <button><FaSearch/></button>
      </div>
    </div>
  );
}

export default SearchBar;
