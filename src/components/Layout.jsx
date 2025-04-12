import { useEffect } from "react";
import { Outlet } from "react-router";
import navLinks from "../data/navLinks.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import genre from "../data/genre.js";

const Layout = () => {

  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
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