import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
function Recipie() {
  let params = useParams();
  const [active, setactive] = useState("Instructions");
  const [details, setdetailes] = useState({});
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e15911edc56d4059a53286455a65e490`
    );
    const detailsData = await data.json();
    setdetailes(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-2xl mb-3">{details.title}</h1>
        <img src={details.image} alt={details.title} />
      </div>
      <div className="info">
        <button
          className={active === "Instructions" ? "btn active" : "btn"}
          onClick={() => setactive("Instructions")}
        >
          Instructions
        </button>
        <button
          className={active === "Ingredents" ? "btn active" : "btn"}
          onClick={() => setactive("Ingredents")}
        >
          Ingredents
        </button>

        {active === "Instructions" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-7"
          >
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </motion.div>
        )}

        {active === "Ingredents" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="mt-7 pl-4">
              {details.extendedIngredients.map((ingerdint) => {
                return (
                  <li className="list-disc" key={ingerdint.id}>
                    {ingerdint.original}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Recipie;
