import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/responsivelogo.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";





const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/category");
  


const navbarColorSwitch = isHome
    ? " bg-purple-700 text-white rounded-t-lg"
    : " bg-white text-black rounded-full";


  return (
    <div className={`inter container mx-auto  navbar bg-base-100 shadow-sm ${navbarColorSwitch}`}>

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden  ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
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
              <h1 className=" font-bold text-2xl">GadgetHeaven</h1></div>


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
        <Link className=" text-xl btn p-2 rounded-full"><AiOutlineShoppingCart /></Link>
        <Link className="text-xl btn p-2 rounded-full"><MdFavoriteBorder /></Link>
      </div>
    </div>
  );
};

export default Navbar;