import { Dispatch, FC, useState, SetStateAction } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import { Close, Delete, Remove, Add } from '@mui/icons-material';
import { useCart } from '../../contexts/CartContext.tsx';
import { ACTION_TYPES } from '../../types/models/cart.model.ts';
import CheckoutForm from '../Checkout/CheckoutForm.tsx';

interface ICartDrawerProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const CartDrawer: FC<ICartDrawerProps> = ({ isCartOpen, setIsCartOpen }) => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const theme = useTheme();

  const removeItem = (id: string) => {
    dispatch({ type: ACTION_TYPES.REMOVE_ITEM, id });
  };

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCheckout = () => {
    setShowCheckout(true);
  };
  const increaseQuantity = (id: string) => {
    dispatch({ type: ACTION_TYPES.INCREASE_QUANTITY, id });
  };

  const decreaseQuantity = (id: string) => {
    dispatch({ type: ACTION_TYPES.DECREASE_QUANTITY, id });
  };
  const handleOrderSubmission = (details: { name: string; email: string }) => {
    alert(`Order placed by ${details.name} (${details.email}) for ${total.toFixed(2)} AED`);
    setShowCheckout(false);
    dispatch({ type: ACTION_TYPES.CLEAR_CART });
  };
  return (
    <Drawer
      anchor='right'
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          display: 'flex',
          width: 250,
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white,
          padding: theme.spacing(2),
        },
      }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center' p={2}>
        <Typography variant='h6'>Your Cart</Typography>
        <IconButton onClick={() => setIsCartOpen(false)}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      {showCheckout ? (
        <CheckoutForm onSubmit={handleOrderSubmission} />
      ) : state.items.length > 0 ? (
        <>
          <List>
            {state.items.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={`${item.name} x${item.quantity}`}
                  secondary={`${item.price * item.quantity} AED`}
                />

                <Box display='flex' alignItems='center'>
                  <IconButton onClick={() => decreaseQuantity(item.id)}>
                    <Remove color='secondary' />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => increaseQuantity(item.id)}>
                    <Add color='secondary' />
                  </IconButton>
                  <IconButton onClick={() => removeItem(item.id)}>
                    <Delete color='error' />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box p={2}>
            <Typography variant='h6'>Total: {total.toFixed(2)} AED</Typography>
            <Button variant='contained' fullWidth onClick={handleCheckout} sx={{ mt: 2 }}>
              Proceed to Checkout
            </Button>
          </Box>
        </>
      ) : (
        <Box p={2} textAlign='center'>
          <Typography>Your cart is empty</Typography>
        </Box>
      )}
    </Drawer>
  );
};

export default CartDrawer;
