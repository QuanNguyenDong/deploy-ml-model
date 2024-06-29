import "bootstrap/dist/css/bootstrap.css";
import "./search.css";
import { useState } from "react";

function SearchBar({ makePrediction }) {
    const [text, onChangeText] = useState("");
    const [isLoading, setLoading] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        makePrediction(text);
        onChangeText("");
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="search-wrap">
                <input
                    type="text"
                    className="search-term"
                    placeholder="Search"
                    onChange={(e) => onChangeText(e.target.value)}
                    value={text}
                />
                <button
                    className="search-button"
                    type="submit"
                    disabled={!text}
                >
                    {isLoading ? (
                        <div className="spinner-border" role="status"></div>
                    ) : (
                        "Evaluate"
                    )}
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
