//  import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { postRecipe, getDiets } from "../actions/index";
// import { useDispatch, useSelector } from "react-redux";
// import "./RecipeCreate.css";

// function validate(input) {
//   let errors = {};
//   if (!input.title) {
//     errors.title = "Title is Required";
//   } else if (!input.summary) {
//     errors.summary = "Summary is Required";
//   } else if (!input.image) {
//     errors.image = "Image is Required";
//   } else if (!input.healthScore) {
//     errors.healthScore = "Score Number is Required";
//   } else if (!input.spoonacularScore) {
//     errors.spoonacularScore = "Level Number is Required";
//   } else if (!input.steps) {
//     errors.steps = "Steps is Required";
//   }
//   return errors;
// }

// export default function RecipeCreate() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const diets = useSelector((state) => state.diets);
//   const [errors, setErrors] = useState({});

//   const [input, setInput] = useState({
//     title: "",
//     summary: "",
//     image: "",
//     healthScore: "",
//     spoonacularScore: "",
//     steps: "",
//     diets: [],
//   });

//   function handleChange(e) {
//     setInput({
//       ...input,
//       [e.target.title]: e.target.value,
//     });
//     setErrors(
//       validate({
//         ...input,
//         [e.target.title]: e.target.value,
//       })
//     );
//   }

//   function handleCheck(e) {
//      /*  if (e.target.checked)  */
//     setInput({
//       ...input,
//       diets: [...input.diets, e.target.value],
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(postRecipe(input));
//     alert("Recipe created successfully!");
//     setInput({
//       title: "",
//       summary: "",
//       image: "",
//       healthScore: "",
//       spoonacularScore: "",
//       steps: "",
//       diets: [],
//     });
//     history.push("/home");
//   }

//   useEffect(() => {
//     dispatch(getDiets());
//   }, [dispatch]);

//   return (
//     <div>
     
//       <form onSubmit={(e) => handleSubmit(e)} className="Formulario">
//           <h1 className="recTitle">Create your own Recipe</h1>
//         <div>
//           <div>
//             <label>Title:</label>
//             <input
//               className="inputs"
//               type="text"
//               value={`${input.title.charAt(0).toUpperCase()}${input.title.slice(
//                 1
//               )}`}
//               title="title"
//               onChange={(e) => handleChange(e)}
//             />
//             {errors.title && <p>{errors.title}</p>}
//           </div>
//           <div>
//             <label>Summary:</label>
//             <input
//               className="inputs"
//               type="text"
//               value={input.summary}
//               title="summary"
//               onChange={(e) => handleChange(e)}
//             />
//             {errors.summary && <p>{errors.summary}</p>}
//           </div>
//           <div>
//             <label>Image:</label>
//             <input
//               className="inputs"
//               type="text"
//               value={input.image}
//               title="image"
//               onChange={(e) => handleChange(e)}
//             />
//             {errors.image && <p>{errors.image}</p>}
//           </div>
//           <div>
//             <label>Health Score:</label>
//             <input
//               className="inputs"
//               type="number"
//               value={input.healthScore}
//               title="healthScore"
//               min="0"
//               max="100"
//               onChange={(e) => handleChange(e)}
//             />
//             {errors.healthScore && <p>{errors.healthScore}</p>}
//           </div>
//           <div>
//             <label>Spoonacular Score:</label>
//             <input
//               className="inputs"
//               type="number"
//               value={input.spoonacularScore}
//               title="spoonacularScore"
//               min="0"
//               max="100"
//               onChange={(e) => handleChange(e)}
//             />
//             {errors.spoonacularScore && <p>{errors.spoonacularScore}</p>}
//           </div>
//           <div>
//             <label>Steps :</label>
//             <input
//               className="inputs"
//               type="text"
//               value={input.steps}
//               title="steps"
//               onChange={(e) => handleChange(e)}
//             />
//             {errors.steps && <p>{errors.steps}</p>}
//           </div>
//         </div>

//         <div >
//             <label>Diets:</label>
//               {diets.map((e) => (
//                 <div className="dietInputs">
//                   <input
//                  className="inputsInputs"
//                     type="checkbox"
//                     value={e.title}
//                     title={e.title}
//                     onChange={(e) => handleCheck(e)}
//                   />
//                   <label>{e.title}</label>
//                 </div>
//               ))}
//         </div>
//         <div className="bottombtns">
//         <Link to="/home">
//         <button className="button">Return</button>
//       </Link>
//         <button type="submit" className="button">Create</button>
//       </div>
//       </form>
//     </div>
//   );
// } 













import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipe, getDiets } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeCreate.css";

function validate(input) {
  let errors = {};
  if (!input.title) {
    errors.title = "Title is Required";
  } else if (!input.summary) {
    errors.summary = "Summary is Required";
  } else if (!input.image) {
    errors.image = "Image is Required";
  } else if (!input.healthScore) {
    errors.healthScore = "Health Score Number is Required";
  } else if (!input.spoonacularScore) {
    errors.spoonacularScore = "Spoonacular Score is Required";
  } else if (!input.steps) {
    errors.steps = "Steps is Required";
  }
  return errors;
}

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    title: "",
    summary: "",
    image: "",
    healthScore: "",
    spoonacularScore: "",
    steps: "",
    diets: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.title]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.title]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
     /*  if (e.target.checked)  */
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(input));
    alert("Recipe created successfully!");
    setInput({
      title: "",
      summary: "",
      image: "",
      healthScore: "",
      spoonacularScore: "",
      steps: "",
      diets: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
     
      <form onSubmit={(e) => handleSubmit(e)} className="Formulario">
          <h1 className="recTitle">Create your own Recipe</h1>
        <div>
          <div>
            <label>Title:</label>
            <input
              className="inputs"
              type="text"
              value={`${input.title.charAt(0).toUpperCase()}${input.title.slice(
                1
              )}`}
              title="title"
              onChange={(e) => handleChange(e)}
            />
            {errors.title && <p>{errors.title}</p>}
          </div>
          <div>
            <label>Summary:</label>
            <input
              className="inputs"
              type="text"
              value={input.summary}
              title="summary"
              onChange={(e) => handleChange(e)}
            />
            {errors.summary && <p>{errors.summary}</p>}
          </div>
          <div>
            <label>Image:</label>
            <input
              className="inputs"
              type="text"
              value={input.image}
              title="image"
              onChange={(e) => handleChange(e)}
            />
            {errors.image && <p>{errors.image}</p>}
          </div>
          <div>
            <label>Health Score:</label>
            <input
              className="inputs"
              type="number"
              value={input.healthScore}
              title="healthScore"
              min="0"
              max="100"
              onChange={(e) => handleChange(e)}
            />
            {errors.healthScore && <p>{errors.healthScore}</p>}
          </div>
          <div>
            <label>Spoonacular Score:</label>
            <input
              className="inputs"
              type="number"
              value={input.spoonacularScore}
              title="spoonacularScore"
              min="0"
              max="100"
              onChange={(e) => handleChange(e)}
            />
            {errors.spoonacularScore && <p>{errors.spoonacularScore}</p>}
          </div>
          <div>
            <label>Steps :</label>
            <input
              className="inputs"
              type="text"
              value={input.steps}
              title="steps"
              onChange={(e) => handleChange(e)}
            />
            {errors.steps && <p>{errors.steps}</p>}
          </div>
        </div>

        <div>
          <div>
            <label>Diets:</label>
            <div>
              {diets.map((e) => (
                <div  className="tipoDeDietas">
                  <input
                 className="inputDiets"
                    type="checkbox"
                    value={e.title}
                    title={e.title}
                    onChange={(e) => handleCheck(e)}
                  />
                  <label className="titleDiets">{e.title}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottomRecBtns">
        <Link to="/home">
        <button className="recButton">Return</button>
      </Link>
        <button type="submit" className="recButton">Create Recipe</button>
      </div>
      </form>
    </div>
  );
}