import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Food from "../components/Food";

function Searched() {
  const [search, setsearched] = useState([]);
  let params = useParams();

  // params value will be with the name that u write in the path at pages page
  // this one  <Route path='/searched/:search' element={<Searched />}/>
  try {
    const getSearched = async (searchVal) => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=e15911edc56d4059a53286455a65e490&query=${searchVal}`
      );

      const recipies = await data.json();

      setsearched(recipies.results);
      console.log(recipies.results.length);
    };

    useEffect(() => {
      getSearched(params.search);
    }, [params.search]);
  } catch (error) {
    console.log(error);
  }
  if (search.length > 0) {
    return <Food FoodList={search} />;
  } else {
    return <div>not found </div>;
  }
}

export default Searched;
