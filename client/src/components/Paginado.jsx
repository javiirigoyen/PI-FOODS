import React from "react";
import "./Paginado.css";

export default function Paginado({ paginado, recipesPerPage, allRecipes }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="paginado">
        {pageNumbers.map((number) => (
          <div key={number}>
            <button className="number" onClick={() => paginado(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
