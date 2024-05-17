import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Cart = ( {cart, clearCart, deleteById, total} ) => {

  const clearCartAlert = () =>{
      
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
        <Typography variant="h4" color="secondary.altern5" sx={{ fontFamily: 'Pacifico, cursive', padding: '30px' }}>Has agregado a tu carrito los siguientes productos </Typography>
        
        {cart.map((product) => (
        <Box
        key={product.id}
        sx={{ 
          border: "2px solid #c04287",
          fontFamily: "Pacifico, cursive",
          padding: '12px',
          color: "#c04287",
          background: "#fdf0f8",
          }}>
          <img src={product.img} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          <Typography variant="h6" color="secondary.altern5" >{product.title}</Typography>
          <Typography variant="h6" color="secondary.altern5" >{product.price}</Typography>
          <Typography variant="h6" color="secondary.altern5" >{product.quantity}</Typography>
          <Button variant="outlined" color="secondary" sx={{ fontFamily: 'Pacifico, cursive',margin: '20px' }}  onClick={() => deleteById(product.id) }  >
            Eliminar
          </Button>
        </Box>
      ))}
      <Typography variant="h4" color="primary.altern3" sx={{ fontFamily: 'Pacifico, cursive',  }}>  El total a pagar es de {total} </Typography>

      <Button variant="contained" color="secondary" sx={{ fontFamily: 'Pacifico, cursive', margin: '20px' }} onClick={clearCartAlert}>
        Limpiar carrito
      </Button>
        
        {
        cart.length > 0 && (<Link to="/checkout">
        <Button variant="contained" color="secondary" sx={{ fontFamily: 'Pacifico, cursive',  margin: '10px' }} >
          Finalizar compra
          </Button>
        </Link> 
        )}
    </div>
  );
};

export default Cart;