/* import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="letras">
        <h1>FOOD APP</h1>
        <div id="button">
          <Link to="/home">
            <button>HOME</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
 */

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="letras">
        <h1>FOOD APP</h1>
       
          <Link to="/home">
            <button  id="button">HOME</button>
          </Link>
      
      </div>
    </div>
  );
}