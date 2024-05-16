import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {

  const {getTotalItems} = 
  useContext( CartContext );
  let total= getTotalItems()


  return (
    <Link to="/cart">
    <Badge badgeContent={total} showZero color="secondary">
  <AddShoppingCartIcon/>
</Badge>
    </Link>
  );
};
