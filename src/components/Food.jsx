import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Food({ FoodList }) {
  return (
    <Fragment>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 relative">
        {FoodList.map((cuis) => {
          return (
            <div
              key={cuis.id}
              className="relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <Link to={`/recipie/${cuis.id}`}>
                <div>
                  <p className="z-10 absolute font-bold top-1/2 text-center w-full text-lg  -translate-y-1/2 text-white">
                    {cuis.title}
                  </p>
                  <img
                    className="w-full h-full object-cover"
                    src={cuis.image}
                    alt={cuis.title}
                  />
                </div>

                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-10"></div>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Food;
