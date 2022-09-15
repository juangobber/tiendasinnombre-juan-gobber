import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from "./itemCount/ItemCount";

function CardProducto(props) {
    let {img, product, price, alt, stock, limite, initial} = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="280"
          image={img}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           ${price}
          </Typography>

        </CardContent>
      </CardActionArea>
      <ItemCount
      stock = {stock}
      limite = {limite}
      initial = {initial}
      />
      <CardActions>
        <Button size="medium" color="primary">
          AÑADIR AL CARRITO
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProducto