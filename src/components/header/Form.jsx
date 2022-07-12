import React, { useState, useEffect } from "react";
import RecipeList from "../RecipeList";
// import { useGlobalContext } from "../../context";

// `https://api.edamam.com/search?q=${meal}&app_id=9238c056&app_key=37ab4e858b8653f8de1c56808a7e51c8&mealType=${mealtype}`;
const Form = () => {
  //   const { setSearchTerm } = useGlobalContext();
  const [meal, setMeal] = useState("meal");
  const [mealtype, setMealType] = useState("breakfast");
  const [data, setData] = useState([]);
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${meal}&app_id=9238c056&app_key=37ab4e858b8653f8de1c56808a7e51c8&mealType=${mealtype}
`;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log(data.hits);
    setData(data.hits);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="section section-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setMeal(e.target.value)}
          value={meal}
        />
        <select
          name="mealtype"
          id="mealtype"
          onChange={(e) => setMealType(e.target.value)}
          value={mealtype}
        >
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </select>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      <RecipeList data={data} />
    </section>
  );
};

export default Form;
