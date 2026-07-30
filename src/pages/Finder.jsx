import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";

const GadgetFinder = () => {
  const [budget, setBudget] = useState(1000);
  const [category, setCategory] = useState("all");

    useEffect(() => {
      document.title = "Gadget Finder | Gadget Heaven";
    }, []);


  // Sample data - replace with your actual products context or JSON fetch
const products = useLoaderData();

  const filteredProducts = products.filter((product) => {
    const matchesBudget = product.price <= budget;
    const matchesCategory = category === "all" || product.category.toLowerCase() === category.toLowerCase();
    // const matchesUseCase = useCase === "all" || product.useCase.toLowerCase() === useCase.toLowerCase();
    return matchesBudget && matchesCategory ;
  });

  return (
    <div className=" mx-auto  ">
      {/* Banner */}
      <div className="bg-[#9538E2] text-white py-10 px-4 text-center mb-5">
        <Heading
          title={"Smart Gadget Finder"}
          subtitle={
            "Find the perfect device matching your budget in seconds."
          }
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-16 grid grid-cols-1 lg:grid-cols-4 gap-8  ">
        {/* Filters Sidebar */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 self-start">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Filter Preference</h2>

          {/* Budget Slider */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Max Budget: <span className="text-[#9538E2] font-bold">${budget}</span>
            </label>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="range range-primary w-full accent-[#9538E2]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$50</span>
              <span>$2000</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Device Type</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full rounded-xl border-gray-300"
            >
              <option value="all">All Categories</option>
              <option value="Computers">Computers</option>
              <option value="phones">Phones</option>
              <option value="Smart Watches">Smart Watches</option>
            </select>
          </div>

        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Matches Found ({filteredProducts.length})
            </h3>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-base-100 rounded-2xl shadow-inner">
              <p className="text-xl font-semibold text-gray-500">No gadgets fit this criteria.</p>
              <p className="text-sm text-gray-400 mt-1">Try increasing your budget slider.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full self-start">
              {filteredProducts.map((products) => (
                <div key={products.product_id} className="card bg-base-100 shadow-xl p-4 rounded-2xl border border-gray-100">
                  <figure className="h-56 overflow-hidden rounded-xl">
                    <img src={products.product_image} alt={products.product_title} className="w-full  object-cover" />
                  </figure>
                  <div className="mt-4">
                    {/* <span className="badge bg-purple-100 text-[#9538E2] border-none font-semibold text-xs mb-2">
                      {products.useCase}
                    </span> */}
                    <h4 className="font-semibold text-lg text-gray-800">{products.product_title}</h4>
                    <p className="text-gray-500 font-medium mt-1">Price: ${products.price}</p>
                    <Link
                      to={`/product/${products.product_id}`}
                      className="btn btn-sm w-full rounded-full border-2 border-[#9538E2] text-[#9538E2] bg-transparent hover:bg-[#9538E2] hover:text-white mt-4"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GadgetFinder;