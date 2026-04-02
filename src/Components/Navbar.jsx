import React, { useContext, useState } from "react";
import logo from "../assets/Logo (1).png";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { MoveRight, Search, ShoppingBag, TicketPercent, UserRound } from "lucide-react";
import { CartContext } from "../Contex/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  // Active Link Style Helper
  const navStyle = ({ isActive }) => 
    isActive ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400 transition-all";

  return (
   <div>
     
     <nav className="bg-black text-white fixed w-full top-0 left-0 z-100 shadow-xl border-b border-gray-900">
      <p className="bg-[#141718] text-sm text-center py-3 flex items-center justify-center gap-3"><TicketPercent />30% off storewide — Limited time! <Link to="/shop" className="flex text-cyan-400 items-center gap-2 border-b border-cyan-400 pb-1">Shop Now <MoveRight /></Link></p>
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 md:w-44 object-contain" />
        </Link>

        {/* Desktop Central Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest font-medium">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/shop" className={navStyle}>Shop</NavLink>
          <NavLink to="/contact" className={navStyle}>Contact Us</NavLink>
          <NavLink to="/topup" className={navStyle}>TopUp</NavLink>
        </div>

        {/* Right Side Icons & CTA */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Icons Group */}
          <div className="flex items-center gap-4">
            <button className="hover:text-cyan-400 transition-colors">
              <Search size={22} />
            </button>
            <Link to="/login" className="p-1 border border-gray-600 rounded-full hover:border-cyan-400 transition-all">
              <UserRound size={20} />
            </Link>
            <Link to="/cart" className="relative hover:text-cyan-400 transition-colors">
              <ShoppingBag size={22} />
              {/* Badge Example */}
              <span className="absolute -top-1 -right-2 bg-emerald-700 text-[15px] rounded-full px-1">{cart.length}</span>
            </Link>
          </div>

          {/* Desktop Button */}
          
          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            {open ? (
              <HiX size={30} className="cursor-pointer text-cyan-400" onClick={() => setOpen(false)} />
            ) : (
              <HiMenu size={30} className="cursor-pointer" onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated Overlay) */}
      <div className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${open ? "opacity-100 visible h-screen" : "opacity-0 invisible h-0"} md:hidden`}>
        <div className="flex flex-col items-center gap-8 pt-10 text-xl font-semibold">
          <NavLink to="/" onClick={() => setOpen(false)} className={navStyle}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)} className={navStyle}>Shop</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={navStyle}>Contact Us</NavLink>
          <NavLink to="/topup" onClick={() => setOpen(false)} className={navStyle}>TopUp</NavLink>
          
          
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;