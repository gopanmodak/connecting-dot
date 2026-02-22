import React, { useState } from "react";
import logo from "../assets/Logo (1).png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-md">
      
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        
        {/* Logo */}
        <img src={logo} alt="logo" className="w-40 md:w-52" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <NavLink to="/" className="hover:text-cyan-400">Home</NavLink>
          <NavLink to="/portfolio" className="hover:text-cyan-400">Portfolio</NavLink>
          <NavLink to="/services" className="hover:text-cyan-400">Services</NavLink>
          <button className="btn btn-primary rounded-full">
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {open ? (
            <HiX size={28} onClick={() => setOpen(false)} />
          ) : (
            <HiMenu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-6 flex flex-col gap-6 text-center">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <button className="btn btn-primary rounded-full w-full">
            Get In Touch
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;