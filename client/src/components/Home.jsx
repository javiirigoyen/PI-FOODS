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
        </div>
    )

}   