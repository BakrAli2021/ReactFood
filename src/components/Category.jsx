import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function Category() {
  return (
    <div className="flex pt-2 bg-red-900 text-white p-4 justify-center flex-col md:flex-row gap-y-4 flex-wrap items-center ">
      <NavLink to={"/ReactFood"} className="logo flex items-center text-3xl">
        <GiKnifeFork></GiKnifeFork>
        <h3>deliciouss</h3>
      </NavLink>
      <div className="nav grid grid-cols-2 gap-3 md:grid-cols-4">
        <NavLink to={"cuisine/Italian"}>
          <div>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
          </div>
        </NavLink>
        <NavLink to={"cuisine/American"}>
          <div>
            <FaHamburger></FaHamburger>
            <h4>American</h4>
          </div>
        </NavLink>
        <NavLink to={"cuisine/Thai"}>
          <div>
            <GiNoodles></GiNoodles>
            <h4>Thai</h4>
          </div>
        </NavLink>
        <NavLink to={"cuisine/African"}>
          <div>
            <GiChopsticks></GiChopsticks>
            <h4>African</h4>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Category;
