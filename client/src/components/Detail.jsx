import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../actions/index";

export default function Detail() {
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(id)


    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    const myRecipe = useSelector((state) => state.detail)

   return (
       <div>
           {
               Object.keys(myRecipe).length > 0 ?
               <div>
                   <h1> Title {myRecipe[0].title}</h1>
                   <img src = {myRecipe[0].image} alt= "img not found"/>
                   <h2>Score : {myRecipe[0].healthScore} </h2>
                   <h2>Spoonacular Score : {myRecipe[0].spoonacularScore}</h2>
                   {myRecipe.dishTypes ? (
                  <h2>Dish Types: {myRecipe.dishTypes + " "}</h2>
                ) : (
                  ""
                )}
                   <h2>Diets:{!myRecipe.createdInDb ? myRecipe.diets + " ": myRecipe.diets.map((e) => e.title + " ")} </h2>
                 </div> : <p>Loading...</p>
           }
           <Link to = "/home">
               return
           </Link>
       </div>
   )
}