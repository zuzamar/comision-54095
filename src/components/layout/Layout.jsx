
import Footer from "./footer/Footer.jsx";
import { NavBar } from "./navBar/NavBar.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{minHeight: "calc(100vh - 150px)"}}> 
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};