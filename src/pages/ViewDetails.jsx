import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { addToCart, addToWishlist, getWishlist } from "../components/Utility";

const ViewDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const allData = data?.find((item) => item.product_id === parseInt(id)) || {};

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification = [],
    availability,
    rating,
  } = allData;

  const newRating = Math.round(rating || 0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if item is already in wishlist when component mounts
  useEffect(() => {
    if (product_id) {
      const storedWishlist = getWishlist();
      const exists = storedWishlist.some((item) => item.product_id === product_id);
      if (exists) {
        setIsWishlisted(true);
      }
    }
  }, [product_id]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product_id) {
      addToCart(allData);
    }
  };

  // Handle Add to Wishlist
  const handleAddToWishlist = () => {
    if (product_id) {
      addToWishlist(allData);
      setIsWishlisted(true);
    }
  };

  return (
    /* Main Layout Wrapper */
    <div className="relative w-full bg-gray-50 pb-24 md:pb-64">
      {/* Header Section */}
      <div className="bg-[#9538E2] text-white pt-8 pb-36 md:pb-48 px-4">
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* Product Details Card */}
      <div className="w-11/12 max-w-5xl mx-auto bg-white text-black p-5 md:p-8 rounded-3xl shadow-xl border border-gray-100 relative -translate-y-24 md:-translate-y-32 flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Side: Image Container */}
        <div className="w-full md:w-5/12 rounded-2xl flex justify-center items-center self-stretch min-h-74 md:min-h-100">
          <img
            className="w-full h-auto max-h-96 object-contain rounded-xl"
            src={product_image}
            alt={product_title}
          />
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-7/12 flex flex-col space-y-4">
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-800">
            {product_title}
          </h2>
          <p className="font-semibold text-xl text-gray-700">
            Price : $ {price}
          </p>

          <p
            className={`font-medium text-sm border-2 p-1 w-28 rounded-4xl flex justify-center items-center ${
              availability
                ? "text-[#309C08] bg-[#eaf5e6] border-[#309C08]"
                : "text-red-600 bg-red-100 border-red-600"
            }`}
          >
            {availability ? "In Stock" : "Out of Stock"}
          </p>

          <p className="text-gray-500 font-normal">{description}</p>

          {/* Specifications */}
          <p className="font-bold text-gray-800">Specification:</p>
          <ol className="list-decimal list-inside space-y-1.5 pl-1">
            {Specification.map((item, idx) => (
              <li className="text-gray-500 font-medium" key={idx}>
                {item}
              </li>
            ))}
          </ol>

          {/* Rating */}
          <div className="space-y-1.5 pt-2">
            <p className="font-bold text-gray-800 flex items-center gap-1.5">
              Rating <FaStar className="text-amber-400 mb-0.5" />
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${
                      i < newRating ? "text-amber-400" : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-200/60">
                {rating}
              </span>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex items-center gap-3 pt-4 mt-auto">
            <button
              onClick={handleAddToCart}
              disabled={!availability}
              className={`btn px-6 py-2.5 rounded-full text-white font-semibold shadow-md border-none flex items-center gap-2 transition-all duration-200 ${
                availability
                  ? "bg-[#9538E2] hover:bg-[#7e2ec2] active:scale-95"
                  : "bg-gray-400 cursor-not-allowed opacity-75"
              }`}
            >
              Add to cart <AiOutlineShoppingCart className="text-xl" />
            </button>

            <button
              onClick={handleAddToWishlist}
              disabled={isWishlisted}
              className={`p-3 border rounded-full transition-all duration-200 shadow-sm ${
                isWishlisted
                  ? "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-red-500 active:scale-95"
              }`}
            >
              <MdFavoriteBorder className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;