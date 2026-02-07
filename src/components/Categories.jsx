import {  Outlet  } from "react-router-dom";
import CategoryCard from "./CategoryCard";



const Categories = ({ categories }) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-4  mx-auto mt-10 pb-24 gap-y-6 ">
            <div className="col-span-1 grid grid-cols-2 md:grid-cols-1 gap-6 md:w-5/6 lg:w-10/12 mx-auto rounded-2xl bg-white p-6 self-start border-2 border-gray-200 ">

                {categories.map((category) => (
                    <CategoryCard
                        category={category}
                        key={category.category_id}
                    ></CategoryCard>
                ))}
                 
            </div>
          <Outlet></Outlet>
        </div>
    );
};

export default Categories;