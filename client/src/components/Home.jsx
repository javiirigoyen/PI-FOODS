import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  orderByName,
  orderByScore,
  filterRecipesByTypes,
} from "../actions";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import NavBar from './NavBar'
import "./Home.css";
import Spinner from './Spinner'

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirtsRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = allRecipes.slice(
    indexOfFirtsRecipes,
    indexOfLastRecipes
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(allRecipes, "Estas son las recetas");

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleFilterTypes(e) {
    dispatch(filterRecipesByTypes(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }

  function handleByScore(e) {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }
  return (
    <div>
      <h1 className="title"> RECIPE APP </h1>
      <Link to="/recipe" >
        <button className="button" >Create new recipe</button>
      </Link>
      <div className="filterContainer">
      <NavBar />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        className="button"
      >
        Reload all recipes
      </button>
        <select onChange={(e) => handleSort(e)} className="button">
          <option value="">Filter Alphabetically</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        <select onChange={(e) => handleByScore(e)} className="button">
          <option value="">Filter Score</option>
          <option value="asc">Max-Min</option>
          <option value="des">Min-Max</option>
        </select>

        <select onChange={(e) => handleFilterTypes(e)} className="button">
          <option value="">Filter By Diets</option>
          <option value="All">All</option>
          <option value="gluten free">Gluten Free</option>
          <option value="dairy free">Dairy Free</option>
          <option value="vegan">Vegan</option>
          <option value="lacto ovo vegetarian">Lacto-Ovo Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="primal">Primal</option>
          <option value="fodmap friendly">Low FODMAP</option>
          <option value="whole 30">Whole30</option>
          <option value="vegetarian">Vegeterian</option>
          <option value="ketogenic">Ketogenic</option>
        </select>
</div>
<div className="pagandsearchContainer">
        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        />
        <SearchBar />
        <div className="cards">
          {currentRecipes.length !== 0 ? (
            currentRecipes.map((c, index) => (
              <Cards
                title={c.title}
                key={index}
                id={c.id}
                image={c.image}
                diets={
                  "Diets: " +
                  (!c.createdInDb
                    ? c.diets + " "
                    : c.diets.map((el) => el.title + " ")) +
                  " ."
                }
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}
