import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from "react-router-dom"

function Item(props) {
  let {img, product, price, alt, id} = props;
  const urlDetalle = `/item/${id}`

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
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

      <Link to= {urlDetalle}>
        <Button size="medium" color="primary">
          ver más
        </Button>
      </Link>
    </Card>
  );
}

export default Item