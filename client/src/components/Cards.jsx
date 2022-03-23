import React from "react"

export default function Cards({title, image}) {
return (
    <div>
        <h3>{title}</h3>
        <img src = {image} alt = "img not found" width = "200px" heigth = "250px" />
    </div>
)
}