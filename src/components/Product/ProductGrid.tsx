import { FC } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, useTheme } from '@mui/material';
import { useCart } from '../../contexts/CartContext.tsx';
import { IProduct } from '../../types/models/products.model.ts';
import { ACTION_TYPES } from '../../types/models/cart.model.ts';
import { PRODUCTS } from '../../constants/products.constant.ts';

const ProductGrid: FC = () => {
  const theme = useTheme();

  const { dispatch } = useCart();

  const addToCart = (product: IProduct) => {
    dispatch({ type: ACTION_TYPES.ADD_ITEM, item: { ...product, quantity: 1 } });
  };

  return (
    <>
      <Grid container spacing={2}>
        {PRODUCTS.map((product: IProduct) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia component='img' height='140' image={product.image} alt={product.name} />
              <CardContent>
                <Typography color='secondary' variant='h6'>
                  {product.name}
                </Typography>
                <Typography color='gray' variant='subtitle2'>
                  {product.description}
                </Typography>
                <Typography color='secondary' variant='body2'>
                  {product.price} {product.currency}
                </Typography>
                <Button
                  variant='contained'
                  onClick={() => addToCart(product)}
                  sx={{ marginTop: theme.spacing(1) }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductGrid;
