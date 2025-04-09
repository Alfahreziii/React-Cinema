import { Outlet } from "react-router";
import navLinks from "../data/navLinks.js";
import Navbar from "./Navbar.jsx";

const Layout = () => {

  return (
    <>
    <Navbar links={navLinks} />
    <Outlet />
    </>

  )
}

export default Layout