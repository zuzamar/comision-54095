import {Card, CardContent,CardMedia, Typography, CardActionArea } from '@mui/material';
import "./ProductCard.css";



export const ProductCard = ({nombre, descripcion, precio, image}) => {

  return (
    <div className="product-card">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="imagen de perfume"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={"secondary.altern4"}>
            {nombre}
          </Typography>
          <Typography variant="body2" color="primary.altern2">
            {descripcion}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color={"secondary.altern4"}>
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
  );
};
