import React, { useEffect, useState } from "react";

interface CustomSearchBar {
  placeholder?: string;
  onHandleSearch: (query: string) => void;
}

export default function SearchBar({
  placeholder = "ponlo wei",
  onHandleSearch,
}: CustomSearchBar) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onHandleSearch(query);
    }, 700);
    // onHandleSearch(query);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onHandleSearch]);

  const handleSearch = () => {
    onHandleSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </>
  );
}
