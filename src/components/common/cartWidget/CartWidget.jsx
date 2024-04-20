import {Badge} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const CartWidget = () => {
  return (
    <div> 
      <Badge badgeContent={0} color="primary.main" showZero>
  <AddShoppingCartIcon />
</Badge>
    </div>
  );
};
