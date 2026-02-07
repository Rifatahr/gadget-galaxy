import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {

    return (
        <NavLink
            to={`/category/${category.category}`}
            className={() =>
                ` py-3 px-3 md:pr-3 md:pl-3 text-center rounded-4xl  w-full md:w-auto lg:w-10/12 mx-auto font-bold text-gray-500 hover:bg-purple-700  cursor-pointer hover:text-white text-lg bg-gray-100 
      
                }`
            }
        >
            {category.category}
        </NavLink>
    );
};

export default CategoryCard;


// ${isActive ? "bg-[#9538E2] text-white" : "bg-[#f3f3f3]"