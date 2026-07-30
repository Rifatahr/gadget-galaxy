import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <NavLink
      to={`/category/${category.category}`}
      className={({ isActive }) =>
        `py-3 px-3 text-center rounded-4xl w-full md:w-auto lg:w-10/12 mx-auto font-bold cursor-pointer text-lg block transition-colors duration-200 ${
          isActive
            ? "bg-[#9538E2] text-white"
            : "bg-gray-100 text-gray-500 hover:bg-purple-200 "
        }`
      }
    >
      {category.category}
    </NavLink>
  );
};

export default CategoryCard;