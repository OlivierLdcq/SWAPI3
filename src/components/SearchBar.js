import React, { Component } from "react";

import "./SearchBar.css";
const SearchBar = ({ inputGotChanged, selectChanged }) => {
  return (
    <div className="SearchBar">
      <input
        type="search"
        placeholder="search for character"
        onChange={inputGotChanged}
      />
      <select id="sort" onChange={selectChanged} class="form-select">
        <option value="popularity">Popularity</option>{" "}
        <option value="alphabetical">Alphabetical order</option>{" "}
        <option value="height">Height</option>{" "}
        <option value="mass">Mass</option>{" "}
      </select>
    </div>
  );
};

export default SearchBar;
