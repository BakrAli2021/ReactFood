import React, { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Slider({ Popular, title, options, head_styled }) {
  return (
    <Fragment>
      <h1 className={`text-2xl font-bold mb-4 ${head_styled}`}>{title}</h1>
      <Splide options={options}>
        {Popular.map((recipe) => {
          return (
            <SplideSlide
              key={recipe.id}
              className="slide relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <Link to={`/recipie/${recipe.id}`}>
                <div className="overflow-hidden  ">
                  <p className="z-10 absolute top-1/2 text-center w-full text-lg  -translate-y-1/2 text-white">
                    {recipe.title}
                  </p>
                  <img
                    className="w-full h-full object-cover transition-transform"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                </div>

                <div className="overlay absolute w-full h-full top-0 left-0 bg-black opacity-40  transition-opacity"></div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Fragment>
  );
}

export default Slider;
