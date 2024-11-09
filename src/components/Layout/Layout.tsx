import React from 'react';
import Footer from './Footer.tsx';
import AppBar from './AppBar.tsx';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import MenuDrawer from './MenuDrawer.tsx';
import CartDrawer from './CartDrawer.tsx';

const DrawerHeader: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar setIsDrawerOpen={setIsDrawerOpen} setIsCartOpen={setIsCartOpen} />
      <MenuDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Grid container direction='column' sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          display: { xs: 'none', md: 'block', sm: 'block', lg: 'block' },
          padding: '0.5rem',
          textAlign: 'center',
        }}
      >
        <Typography variant='caption' color='white'>
          For orders with both in-stock and pre-order items, the shipment will be processed once all
          items are available.
        </Typography>
      </Box>
      <DrawerHeader />
      <Box
        sx={{
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          padding: theme.spacing(2),
          flex: '1 0 auto',
        }}
      >
        {children}
      </Box>

      <Footer />
    </Grid>
  );
};
export default Layout;
