import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/gadget_11733818.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { getCart, getWishlist } from "./Utility";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const updateCounts = () => {
    const cart = getCart();
    const wishlist = getWishlist();
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCounts();

    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("wishlistUpdated", updateCounts);

    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("wishlistUpdated", updateCounts);
    };
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/category");

  // Aligned margins with Banner (mx-3 sm:mx-6 lg:mx-12)
  const navbarColorSwitch = isHome
    ? "mx-3 sm:mx-6 lg:mx-12 mt-3 bg-[#9538E2] text-white rounded-t-3xl"
    : "bg-white text-gray-800 shadow-sm";

  return (
    <div className={navbarColorSwitch}>
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-8 py-2.5">
        {/* Left: Mobile Drawer Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-1">
              <IoMdMenu className="h-7 w-7" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-2xl z-50 mt-3 w-52 p-3 shadow-xl font-medium"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Statistics">Statistics</NavLink></li>
              <li><NavLink to="/DashBoard">Dashboard</NavLink></li>
              <li><NavLink to="/Finder">Gadget Finder</NavLink></li>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img src={logoImg} alt="Gadget Heaven Logo" className="w-8 sm:w-9 h-auto" />
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
              GadgetHeaven
            </h1>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            <li>
              <NavLink className={({ isActive }) => `font-medium ${isActive ? "underline font-bold" : ""}`} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `font-medium ${isActive ? "underline font-bold" : ""}`} to="/Statistics">
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `font-medium ${isActive ? "underline font-bold" : ""}`} to="/DashBoard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => `font-medium ${isActive ? "underline font-bold" : ""}`} to="/Finder">
                Gadget Finder
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right: Cart & Wishlist Actions */}
        <div className="navbar-end gap-2 sm:gap-3">
          <Link
            to="/dashboard"
            state={{ tab: "cart" }}
            className="relative p-2.5 bg-white text-gray-800 rounded-full hover:bg-gray-100 shadow-sm"
          >
            <AiOutlineShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/dashboard"
            state={{ tab: "wishlist" }}
            className="relative p-2.5 bg-white text-gray-800 rounded-full hover:bg-gray-100 shadow-sm"
          >
            <MdFavoriteBorder className="text-xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;