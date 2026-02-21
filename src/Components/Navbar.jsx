import React from "react";

import logo from "../assets/Logo (1).png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#000000] text-white flex justify-between items-center px-10 py-5 fixed z-50 w-full top-0 left-0 shadow-md">
      <div>
        <img src={logo} alt=""  className="w-60 pl-20"/>
      </div>

      <div className="flex gap-10 items-center pr-20">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/services">Services</NavLink>
        <button className="btn btn-primary rounded-4xl">Get In Touch</button>
      </div>
    </div>
  );
};

export default Navbar;
