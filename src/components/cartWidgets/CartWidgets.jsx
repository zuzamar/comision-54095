import "../styles/Cartwidget.css";
import carro from "../../assets/imagenes/carrito4.png"

export const CartWidgets = () => {
  return (
    <div>
      <img src={carro} alt="carro de compras" style={{ width:"2rem"}} />
      0
    </div>
  );
};