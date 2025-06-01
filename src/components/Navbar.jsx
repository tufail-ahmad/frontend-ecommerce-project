import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <nav className="fixed w-full px-4 top-0 flex justify-between items-center z-50 py-6 bg-pink-200">
      {/* first div */}
      <div>
        <Link to="/">
          <h1 className="text-base font-normal md:text-3xl md:font-bold">
            Exclusive
          </h1>
        </Link>
      </div>
      {/* second div */}
      <div>
        <ul className="hidden md:flex items-center gap-5">
          <Link
            to="/"
            onClick={() => setActiveMenu("home")}
            className={`text-lg font-normal text-gray-700 border-b-2 border-pink-200 ${
              activeMenu === "home" && "border-b-2 border-red-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-lg font-normal text-gray-700 border-b-2 border-pink-200 ${
              activeMenu === "about" && "border-b-2 border-red-500"
            }`}
            onClick={() => setActiveMenu("about")}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-lg font-normal text-gray-700 border-b-2 border-pink-200 ${
              activeMenu === "contact" && "border-b-2 border-red-500"
            }`}
            onClick={() => setActiveMenu("contact")}
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className={`text-lg font-normal text-gray-700 border-b-2 border-pink-200 ${
              activeMenu === "signup" && "border-b-2 border-red-500"
            }`}
            onClick={() => setActiveMenu("signup")}
          >
            Signup
          </Link>
        </ul>
      </div>
      {/* third div */}
      <div className="flex items-center gap-4">
        {/* search input */}
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="what are you looking for?"
            className="outline-none pl-10 pr-15 py-2 bg-gray-50 rounded-sm w-full"
          />
          <img
            src={assets.search}
            alt=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5"
          />
        </div>
        <Link to="/wish">
          <img
            src={assets.wish}
            alt="wish"
            className="cursor-pointer w-5 h-5"
          />
        </Link>
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <img src={assets.cart} alt="cart" className="w-6 h-6" />
            <div className="absolute -top-2 -right-1 bg-red-500 text-white text-sm rounded-full w-4 h-4 flex items-center justify-center">
              0
            </div>
          </div>
        </Link>
        <Link to="/login">
          <img src={assets.user} alt="user" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
