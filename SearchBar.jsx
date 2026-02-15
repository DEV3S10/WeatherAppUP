import { useState } from "react";

function SearchBar({ onSearch, onLocation, toggleTheme, dark }) {
    const [input, setInput] = useState("");

    return (
        <div className="search-box">
            <input
                placeholder="Search city..."
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => onSearch(input)}>Search</button>
            <button onClick={onLocation}>📍</button>
            <button onClick={toggleTheme}>{dark ? "☀️" : "🌙"}</button>
        </div>
    );
}

export default SearchBar;
