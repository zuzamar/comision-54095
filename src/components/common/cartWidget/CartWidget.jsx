import {Badge} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary.main" showZero>
  <AddShoppingCartIcon />
</Badge>
    </Link>
  );
};

