import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes } from "../actions"
import {Link} from "react-router-dom"
import Cards from "./Cards"
import Paginado from "./Paginado"

export default function Home () {

    const dispatch = useDispatch()
    const allRecipes = useSelector( state => state.recipes)
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipes = currentPage * recipesPerPage
    const indexOfFirtsRecipes = indexOfLastRecipes - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirtsRecipes, indexOfLastRecipes)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    console.log(allRecipes, 'Estas son las recetas')

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch]) 

    function handleClick(e) {
        e.preventDefault()
        dispatch(getRecipes())
    }

    return (
        <div>
            <Link to = "/recipe">Create Recipe</Link>
            <h1> RECIPE APP </h1>
            <button onClick={e => {handleClick(e)}}>
                Reload all recipes
            </button>
       <div>
        <select>
            <option value = "">Filter Alphabetically</option>
            <option value = "a-z">A-Z</option>
            <option value = "z-a">Z-A</option>
        </select>
        <select>
            <option value="">Filter Punctuation</option>
            <option value = "asc">Mayor-Menor</option>
            <option value = "des">Menor-Mayor</option>
        </select>
        <select>
            <option value ="">Filter By Origin</option>
            <option value = "all">All</option>
            <option value = "created">Created</option>
            <option value = "api">Api</option>
        </select>
        <select>
            <option value="">Filter By Diets</option>
            <option value = "all">All</option>
        </select>

        <Paginado 
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes.length}
        paginado={paginado}
        />
{
            currentRecipes.length !== 0 ? currentRecipes.map((c, index) => <Cards
            title={c.title}
            image={c.image}
            key={index}
            id={c.id}
            />) 
            :
            <h1>Cargando...</h1>
        } 

    
        </div>
        
        </div>
    )

}   