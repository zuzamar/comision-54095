import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import "./NavBar.css";
import { Link } from "react-router-dom"


export const NavBar = () => {

  return (

<div>
      <>
        <div className="containerNavbar">
          <Link to="/" className="brand">
            "Mi Perfumería"
          </Link>
          <ul className="categories">
            <Link to="/">Todas</Link> 
            <Link to="/category/mujer">Mujer</Link>
            <Link to="/category/hombres">Hombre</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
