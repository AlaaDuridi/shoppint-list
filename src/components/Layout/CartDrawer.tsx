import { Dispatch, FC, SetStateAction } from 'react';
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
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useCart } from '../../contexts/CartContext.tsx';
import { ACTION_TYPES } from '../../types/models/cart.model.ts';

interface ICartDrawerProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const CartDrawer: FC<ICartDrawerProps> = ({ isCartOpen, setIsCartOpen }) => {
  const { state, dispatch } = useCart();

  const removeItem = (id: string) => {
    dispatch({ type: ACTION_TYPES.REMOVE_ITEM, id });
  };

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
      <Box display='flex' justifyContent='space-between' alignItems='center' p={2}>
        <Typography variant='h6'>Your Cart</Typography>
        <IconButton onClick={() => setIsCartOpen(false)}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      {state.items.length > 0 ? (
        <>
          <List>
            {state.items.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={`${item.name} x${item.quantity}`}
                  secondary={`$${item.price * item.quantity}`}
                />
                <IconButton onClick={() => removeItem(item.id)} color='secondary'>
                  <Close />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box p={2}>
            <Typography variant='h6'>Total: ${total}</Typography>
            <Button variant='contained' fullWidth onClick={() => alert('Proceed to Checkout')}>
              Checkout
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
