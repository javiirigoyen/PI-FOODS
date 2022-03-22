import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes } from "../actions"
import {Link} from "react-router-dom"

export default function Home () {

    const dispatch = useDispatch()
    const recetas = useSelector(state => state.recipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getRecipes)

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
            {/* <option value = "">Filter Alphabetically</option> */}
            <option value = "a-z">A-Z</option>
            <option value = "z-a">Z-A</option>
        </select>
        <select>
           {/*  <option value="">Filter Punctuation</option> */}
            <option value = "asc">Mayor-Menor</option>
            <option value = "des">Menor-Mayor</option>
        </select>
        <select>
           {/*  <option value ="">Filter By Origin</option> */}
            <option>All</option>
            <option>Created</option>
            <option>Api</option>
        </select>
        <select>
           {/*  <option value="">Filter By Diets</option> */}
            <option>All</option>
        </select>
        </div>
        </div>
    )

}   