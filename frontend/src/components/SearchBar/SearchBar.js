import "bootstrap/dist/css/bootstrap.css";
import "./search.css";
import { useState } from "react";

function SearchBar({ makePrediction }) {
    const [text, onChangeText] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setInput(text);
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
                    maxLength={500}
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
            <div className="search-display">
                <h3>{input}</h3>
            </div>
        </form>
    );
}

export default SearchBar;
