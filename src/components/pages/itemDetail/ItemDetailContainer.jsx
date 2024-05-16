import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import Swal from 'sweetalert2';
import { db } from "../../../fireBaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState({})

  const { addToCart,getQuantityById } = 
  useContext(CartContext)
  let initial= getQuantityById(+id)

  useEffect(()=>{
    
let productsCollection = collection (db, "products")
let refDoc = doc(productsCollection, id)
getDoc(refDoc).then (res => {setItem( {id:res.id, ...res.data()})
});

  }, [id])

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };

    addToCart ( product );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "has añadido un articulo a tu carrito",
      showConfirmButton: false,
      timer: 1500
    });
    
  };
    
  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
