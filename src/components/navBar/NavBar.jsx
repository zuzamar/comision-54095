import "../styles/NavBar.css";
import { CartWidgets } from "../cartWidgets/CartWidgets";

export const NavBar = () => {

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="productos">Productos</a>
        </li>
        <li>
          <a href="contacto">Contacto</a>
        </li>
      </ul>
      <h2> Ecommerce </h2>
      <CartWidgets />
    </nav>
  );
};
