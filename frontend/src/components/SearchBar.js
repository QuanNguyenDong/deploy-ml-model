import "bootstrap/dist/css/bootstrap.css";
import "./search.css";

function SearchBar() {
    return (
        <form>
            <div className="search-wrap">
                <input
                    type="text"
                    className="search-term"
                    placeholder="Search"
                />
                <button className="search-button" type="button">
                    Evaluate
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
