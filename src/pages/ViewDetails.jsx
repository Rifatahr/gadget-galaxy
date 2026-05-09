
import Heading from "../components/Heading";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";



const ViewDetails = () => {

const {id} = useParams();
const data = useLoaderData();


const allData = data.find((item) => item.product_id === parseInt(id));
console.log(allData);


  const {
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = allData;

  const newRating = Math.round(rating);

  const wishlistBtn = false;


  return (
   <div className="relative md:min-h-187">
      
      
      <div className="bg-[#9538E2] text-white pt-10 pb-10 md:pb-32">
        <Heading title = {'Product Details'} subtitle = {'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} ></Heading>



        <div className="flex flex-col md:flex-row gap-4 bg-white items-center mt-10 md:mt-0 w-11/12 md:w-9/12 rounded-3xl mx-auto md:absolute left-56 top-1/4 p-8">
          <div className="flex-1">
            <img
              className="h-full w-full rounded-2xl"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-black space-y-3 flex-1">
            <h2 className="font-bold text-3xl ">{product_title}</h2>
            <p className="font-semibold text-xl text-gray-700">
              Price : $ {price}
            </p>
            <p className="font-medium text-sm text-[#309C08] bg-[#eaf5e6] border-[1px] border-[#309C08] p-1 w-28 rounded-4xl flex justify-center items-center">
              {availability ? " In Stock" : "Out of Stock"}
            </p>
            <p className="text-gray-500 font-semibold">Category : {category}</p>
            <p className="text-gray-500">{description}</p>
            <p className="font-bold">Specification:</p>
            <ol className="list-decimal list-inside ml-1">
              {Specification.map((item, idx) => (
                <li className="text-gray-500" key={idx}>
                  {item}
                </li>
              ))}
            </ol>

            {/* rating */}
            <div>
              <p className="flex items-center gap-2">
                Rating <FaStar className="text-yellow-300" />
              </p>

              <div className="flex items-center">
                {Array.from({ length: newRating }, (_, i) => (
                  <FaStar className="text-yellow-500" key={i} />
                ))}
                <p className="ml-2 text-sm bg-[#f3f3f3] px-3 py-1 rounded-4xl">
                  {rating}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="btn  bg-[#9538E2] rounded-4xl text-white hover:bg-gray-300 hover:text-[#9538E2]"
              
              >
                Add to cart <AiOutlineShoppingCart className="text-white text-2xl" />
              </button>

              <button
                
                className={
                  wishlistBtn
                    ? ""
                    : "block hover:bg-[#9538E2]  text-white rounded-full"
                }
                disabled={wishlistBtn}
              >
                <MdFavoriteBorder
                  className="text-gray-400  text-[43px] border-[1px] p-2 rounded-full "
                  disabled={wishlistBtn}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


 
  
  );
};

export default ViewDetails;