import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Food from "../components/Food";

function Cuisine() {
  const [cuisine, setcuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    // store api in local storage
    if (localStorage.getItem(params.type)) {
      setcuisine(JSON.parse(localStorage.getItem(params.type)));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e15911edc56d4059a53286455a65e490&cuisine=${name}`
      );

      const recipes = await data.json();
      setcuisine(recipes.results);
      localStorage.setItem(params.type, JSON.stringify(recipes.results));

      // console.log(data.recipes);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Food FoodList={cuisine} />
    </motion.div>
  );
}

export default Cuisine;
