import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import ContactSection from "../Components/ContactSection";
import FullSection from "../Components/FullSection";


const MainLayout = () => {
  return (
    <div>
     
      <Navbar />
      <div className="mt-25">
        <Outlet/>
      </div>

      <ContactSection/>
      <FullSection/>
      <Footer/>
    </div>
  );
};

export default MainLayout;
