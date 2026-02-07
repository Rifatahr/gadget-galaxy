
import { NavLink } from "react-router-dom";

const Card = ({product}) => {
    const {product_image, product_title, price, product_id} = product || {};
   
    return (
       <div className="card bg-base-100 shadow-xl p-5 w-full self-start h-full ">
      <figure className="max-h-72">
        <img
          src={product_image}
          alt="Your Most wanted Device"
          className="rounded-xl h-full "
        />
      </figure>
      <div className="card-body p-0 mt-6">
        <h2 className="card-title font-semibold text-2xl">{product_title}</h2>
        <p className="font-medium text-gray-500">Price : {price} $</p>
        <div className="card-actions">
          <NavLink to={`/ProductDetails/${product_id}`} >
            <button className="btn rounded-4xl text-[#9538E2] bg-transparent border-2 border-purple-500 hover:bg-[#9538E2] hover:text-white mt-4 px-6">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
    );
};

export default Card;