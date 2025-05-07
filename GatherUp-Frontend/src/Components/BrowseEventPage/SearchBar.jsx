import React, { useState, useEffect } from "react";
import "./brosweEvent.css";
function SearchBar({ onResults, onEmptySearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("searchbar");
  };
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() === "") {
        onEmptySearch();
      } else {
        console.log(query);
        fetchResults(query);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchResults = async (searchTerm) => {
    try {
      const res = await fetch(
        `http://localhost:8080/events/searchEvent?q=${searchTerm}`
      );
      const data = await res.json();
      onResults(data);
    } catch (err) {
      console.error("Search error:", err);
      onResults([]);
    }
  };

  return (
    <>
      <div class="grid1"></div>
      <div id="poda">
        <div class="glow"></div>
        <div class="darkBorderBg"></div>
        <div class="darkBorderBg"></div>
        <div class="darkBorderBg"></div>

        <div class="white"></div>

        <div class="border1"></div>

        <form onSubmit={handleSearch}>
          <div id="main">
            <input
              placeholder="Search..."
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              name="text"
              class="input"
            />
            <div id="input-mask"></div>
            <div id="pink-mask"></div>
            
            
            <div id="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                height="24"
                fill="none"
                class="feather feather-search"
              >
                <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                <line
                  stroke="url(#searchl)"
                  y2="16.65"
                  y1="22"
                  x2="16.65"
                  x1="22"
                ></line>
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stop-color="#f8e7f8" offset="0%"></stop>
                    <stop stop-color="#b6a9b7" offset="50%"></stop>
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stop-color="#b6a9b7" offset="0%"></stop>
                    <stop stop-color="#837484" offset="50%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
