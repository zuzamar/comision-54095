import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ( {cart, clearCart, deleteById, total} ) => {

  const clearCartAlert = () =>{
    //clearCart ()
    Swal.fire({
      title: "Seguro que vas a eliminar estos productos de tu carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: `si`,
      denyButtonText: `no`
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("has eliminado los productos de tu carrito");
      } else if (result.isDenied) {
        Swal.fire("sigue agregando productos!");
      }
    });
  }

  return (
    <div>
        <h2 style={{ border: "2px solid black", fontFamily: "Pacifico, cursive", color:  "#c04287"}} >Has agregado a tu carrito los siguientes productos</h2>

        {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black", fontFamily: "Pacifico, cursive", color:  "#c04287"}}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <Button onClick={() => deleteById(product.id) } variant="contained" >
            Eliminar
          </Button>
        </div>
      ))}
      <h2 style={{ border: "2px solid black", fontFamily: "Pacifico, cursive", color:  "#c04287",}} > El total a pagar es de {total} </h2>

      <Button onClick={clearCartAlert} variant="contained">
        Limpiar carrito
      </Button>
        
        {
        cart.length > 0 && (<Link to="/checkout">
        <Button variant="contained">
          Finalizar compra
          </Button>
        </Link> 
        )}
    </div>
  );
};

export default Cart;