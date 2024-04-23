import { Button, Card, CardContent, CardMedia, Typography, CardActions, } from '@mui/material';
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({title, description, price, img, id}) => {

  return (
    <Card className="product-card" sx={{ width: 300 }}>
      <CardMedia
        sx={{ height: 280 }}
        image={img}
        title="Perfume"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={"secondary.altern4"}>
            {title}
          </Typography>
          <Typography variant="body2" color="primary.altern2">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color={"secondary.altern4"}>
          $ {price}
          </Typography>
        </CardContent>
      <CardActions>
        < Link to={`/itemDetail/${id}`}>
          <Button size="small" >Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;



