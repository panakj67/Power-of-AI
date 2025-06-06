import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { setLogin } from "../store/actions/userSlice";
import DropDown from "./DropDown";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  console.log(user);
  
  return (
    <nav className="flex justify-between 
     sticky top-0 z-10 items-center px-24 py-4 shadow-sm bg-white">
      {/* Logo */}
      <NavLink to={'/'} className="text-3xl font-bold text-blue-800">
        Interview<span className="text-black">AI</span>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex gap-12 items-center text-md font-medium text-gray-800">
        <NavLink to={"/"} className="hover:text-blue-800 cursor-pointer">Home</NavLink>
        <NavLink to={'/howitworks'} className="hover:text-blue-800 cursor-pointer font-semibold">How it works</NavLink>
        <h4 className="hover:text-blue-800 cursor-pointer">Points</h4>
        {!user ? (
  <button
    onClick={() => dispatch(setLogin(true))}
    className="bg-black px-6 py-2 rounded-full text-white cursor-pointer"
  >
    Sign in
  </button>
) : (
  <div className="relative group">
    <div className="rounded-full cursor-pointer border- border-blue-600">
      <img
        className="h-8 w-8 rounded-full object-cover"
        src={
          user?.profileImg ||
          "https://static.vecteezy.com/system/resources/previews/035/624/082/non_2x/user-profile-person-icon-in-flat-isolated-in-suitable-for-social-media-man-profiles-screensavers-depicting-male-face-silhouettes-for-apps-website-vector.jpg"
        }
        alt="user"
      />
    </div>

    {/* Dropdown */}
    <DropDown/>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
