import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../fireBaseConfig";


export const Checkout = () => {

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();


  const [info, setInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.log(error));

      cart.forEach((product) => {
        let refDoc = doc(db, "products", product.id);
        updateDoc(refDoc, { stock: product.stock - product.quantity });
      });
  
      clearCart();

  };

  return (
    <div style={{ padding: "100px", background: "#fdf0f8"}}>
        {orderId ? (
        <h1 style={{ fontFamily: "Pacifico, cursive", background: "#fdf0f8", color: "#73284d"}}> su id es: {orderId} </h1>
      ) : (
      <form onSubmit={handleSubmit}>
        <TextField 
          variant="filled"
          type="text"
          label="Nombre"
          onChange={handleChange}
          name="name"
          sx={{ margin: "10px",
          }}
          
        />
        <TextField
          variant="filled"
          type="text"
          label="Telefono"
          onChange={handleChange}
          name="phone"
          sx={{ margin: "10px"}}
        />
        <TextField
          variant="filled"
          type="text"
          label="Email"
          onChange={handleChange}
          name="email"
          sx={{ margin: "10px"}}
        />
        <Button variant="contained" type="submit" sx={{ fontFamily: "Pacifico, cursive", color: "#73284d" }}>enviar</Button>
      </form>
      )}
    </div>
  );
};