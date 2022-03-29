import React from "react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {getNameRecipes} from "../actions"
import "./SearchBar.css";


export default function SearchBar() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")

function handleInputRecipes(e) {
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
}

function handleSubmit(e) {
    e.preventDefault()
    dispatch(getNameRecipes(title))
    setTitle(e.value = '')
}



    return (
        <div>
            <input  type="text" placeholder="Search Recipes..." onChange={(e) => handleInputRecipes(e)}/>
            <button type="submit"  onClick={(e) => handleSubmit(e)}>Search Recipes</button>
        </div>
    )
}