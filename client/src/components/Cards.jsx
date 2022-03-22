import React from "react"

export default function Cards({title, diets, image}) {
return (
    <div>
        <h3>{title}</h3>
        <h5>{diets}</h5>
        <img src = {image} alt = "img not found" width = "200px" heigth = "250px" />
    </div>
)
}