import "./Counter.css";
import { Typography, Button, Box } from "@mui/material";

export const Counter = ({
  sumar,
  restar,
  contador,
  onAdd
}) => {
  return (
    <Box className="counter">
      <Typography variant="h5" color="primary.altern3" sx={{ fontFamily: 'Pacifico, cursive' }}> agrega productos a tu carrito
      </Typography>
      <Button variant="outlined" color="secondary" sx={{ fontFamily: 'Pacifico, cursive' }}  onClick={restar}>restar</Button>
      <Typography variant="h6" color="secondary" sx={{ fontFamily: 'Pacifico, cursive' }}>{contador}</Typography> 
      <Button variant="outlined" color="secondary" sx={{ fontFamily: 'Pacifico, cursive' }} onClick={sumar}>sumar</Button>
      <Button variant="contained" color="secondary"  sx={{ fontFamily: 'Pacifico, cursive' }} onClick={() => onAdd(contador)}>Agregar al carrito</Button>
    </Box>
  );  
};
