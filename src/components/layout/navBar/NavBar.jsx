import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import "./NavBar.css";


export const NavBar = () => {

  return (
  <div>
    <nav className="navbar">
      <h2> Ecommerce </h2>
      <ul>
        <li>
          <a href="Todos">Todos</a>
        </li>
        <li>
          <a href="Mujer">Mujer</a>
        </li>
        <li>
          <a href="Hombre">Hombre</a>
        </li>
      </ul>
      <CartWidget/>
    </nav>
    
  </div>
    
  );
};
