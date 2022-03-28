import React, {useState, useEffect} from "react"
import {Link, useHistory} from "react-router-dom"
import {postRecipe, getDiets} from "../actions/index"
import {useDispatch, useSelector} from "react-redux"

export default function RecipeCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const diets = useSelector((state) => state.diets);
  
    const [input, setInput] = useState({
      title: "",
      summary: "",
      diets: [],
      image: "",
      healthScore: "",
      spoonacularScore: "",
      stepByStep: "",
    });
  
    function handleChange(e) {
      setInput({
        ...input,
        [e.target.title]: e.target.value,
      });
    }
    function handleCheck(e) {
      if (e.target.checked) {
        setInput({
          ...input,
          diets: [...input.diets, e.target.value],
        });
      }
    }
    function handleSubmit(e) {
      e.preventDefault();
      dispatch(postRecipe(input));
      alert("Recipe created successfully!");
      setInput({
        title: "",
        summary: "",
        diets: [],
        image: "",
        healthScore: "",
        spoonacularScore: "",
        stepByStep: "",
      });
      history.push("/home");
    }
  
    useEffect(() => {
      dispatch(getDiets());
    }, [dispatch]);
  
    return (
      <div>
        <Link to="/home">
          <button>Return</button>
        </Link>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={input.title}
                title="title"
                onChange={(e) => handleChange(e)}
                
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="text"
                value={input.image}
                title="image"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Health Score:</label>
              <input
                id="score"
                type="number"
                value={input.healthScore}
                title="healthScore"
                min="0"
                max="100"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Spoonacular Score:</label>
              <input
                id="HealthyFoodLevel"
                type="number"
                value={input.spoonacularScore}
                title="spoonacularScore"
                min="0"
                max="100"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label>Summary:</label>
              <input
                type="text"
                value={input.summary}
                title="summary"
                onChange={(e) => handleChange(e)}
                
              />
            </div>
            <div>
              <label>Step By Step:</label>
              <input
                type="text"
                value={input.stepByStep}
                title="stepByStep"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
  
          <div>
            <div>
              <label>Diets:</label>
              <div>
                {diets.map((e) => (
                  <div>
                    <input
                      type="checkbox"
                      value={e.title}
                      title={e.title}
                      onChange={(e) => handleCheck(e)}
                    />
                    <label>{e.title}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button type="submit">
            Create Recipe
          </button>
        </form>
      </div>
    );
  }