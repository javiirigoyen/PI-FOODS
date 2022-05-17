import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../actions";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  function handleInputRecipes(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameRecipes(title));
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className='searchForm'>
      <input
        id="inputName"
        value={title}
        type="text"
        placeholder="Search Recipes..."
        onChange={(e) => handleInputRecipes(e)}
      />
      <button 
      type="submit" 
      id="buttonSearch"
        onClick={e => handleSubmit(e)}
        >
        Search
      </button>
    </form>
  );
}