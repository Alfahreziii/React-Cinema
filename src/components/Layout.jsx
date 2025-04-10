import { useEffect } from "react";
import { Outlet } from "react-router";
import navLinks from "../data/navLinks.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import genre from "../data/genre.js";

const Layout = () => {

  useEffect(() => {
    document.body.classList.add('bg-home');
    return () => {
      document.body.classList.remove('bg-home');
    };
  }, []);

  return (
    
    <>
    <Navbar links={navLinks} />
    <Outlet />
    <Footer genre={genre}/>
    </>

  )
}

export default Layout