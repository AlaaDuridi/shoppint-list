import { FC, useState } from 'react';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';

interface CheckoutFormProps {
  onSubmit: (details: { name: string; email: string }) => void;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        padding: theme.spacing(2),
      }}
    >
      <Typography variant='h6' textAlign='center'>
        Checkout
      </Typography>
      <TextField
        label='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />
      <Button variant='contained' color='primary' type='submit' fullWidth>
        Place Order
      </Button>
    </Box>
  );
};

export default CheckoutForm;
