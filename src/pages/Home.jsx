import {  useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";



const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
           {/* Banner */}
           <Banner></Banner>

           {/* Categories Section */}

           <div className="mt-10 md:mt-96 mb-10">
                <h2 className="text-4xl font-bold text-center">
                    Explore Cutting-Edge Gadgets
                </h2>
                <Categories categories={categories}></Categories>
            </div>


           {/* Dynamic nested Component */}
   
            
        </div>
    );
};

export default Home;