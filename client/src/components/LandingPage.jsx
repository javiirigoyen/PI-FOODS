import React from "react"
import {Link} from "react-router-dom"
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div >
        <div>
            <h1>FOOD APP</h1>
            <div >
            <Link to = "/home">
                <button>HOME</button>
            </Link>
            </div>
      </div>
    </div>
    )
}

