import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/gadget_11733818.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";





const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/category");
  


const navbarColorSwitch = isHome
    ? " mx-8 bg-purple-700 text-white rounded-t-3xl"
    : " bg-white text-black rounded-lg";
    


  return (
    <div className={`inter  shadow-sm ${navbarColorSwitch}`}>

      <div className="container  mx-auto navbar mt-1.5 ">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
           
            <IoMdMenu className="h-7 w-7"  ></IoMdMenu>
            
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black ">
            <li><NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/Statistics">Statistics</NavLink></li>
            <li><NavLink to="/DashBoard">Dashboard</NavLink></li>
          </ul>
        </div>
        <Link to= "/">

            <div className="flex justify-center items-center gap-1.5">
              <span className="w-10"> <img src={logoImg} alt="" /> </span>
              <h1 className=" font-bold text-lg md:text-2xl">GadgetHeaven</h1></div>


          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink className={({ isActive }) => `font-medium ${isActive ? "underline" : ""}`} to="/"> Home</NavLink></li>
            <li><NavLink className={({ isActive }) => `font-medium ${isActive ? "underline" : ""}`} to="/Statistics">Statistics</NavLink></li>
            <li><NavLink className={({ isActive }) => `font-medium ${isActive ? "underline" : ""}`} to="/DashBoard">Dashboard</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to="/DashBoard" className=" text-xl btn p-2 rounded-full"><AiOutlineShoppingCart /></Link>
        <Link to="/DashBoard" className="text-xl btn p-2 rounded-full"><MdFavoriteBorder /></Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;