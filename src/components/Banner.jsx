import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    /* Outer wrapper with margin matching Navbar and bottom spacing for the half-projecting image */
    <div className="mx-3 sm:mx-6 lg:mx-12 mb-28 sm:mb-44 md:mb-60">
      {/* Main purple box with generous bottom padding so content never touches the image */}
      <div className="relative bg-purple-700 text-center pt-8 sm:pt-12 md:pt-16 pb-32 sm:pb-52 md:pb-64 px-4 sm:px-8 text-white rounded-b-3xl">
        
        {/* Banner Content Container */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-3 sm:py-5 text-xs sm:text-sm md:text-base text-gray-100 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>

          {/* Shop Now Button (No Transitions) */}
          <button
            onClick={() => navigate("/dashboard")}
            className="btn px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-purple-700 font-bold border-none shadow-md hover:bg-gray-100"
          >
            Shop Now
          </button>
        </div>

        {/* Floating Image Frame (Mathematical 50% overlap using bottom-0 translate-y-1/2) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[88%] max-w-4xl p-2 sm:p-3 md:p-4 bg-white/20 backdrop-blur-md border-2 border-white/70 rounded-2xl sm:rounded-3xl ">
          <img
            src={bannerImg}
            className="rounded-xl sm:rounded-2xl w-full h-40 sm:h-64 md:h-95 object-cover block"
            alt="Gadget Heaven Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;