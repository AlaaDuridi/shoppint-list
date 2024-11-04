import React from 'react';
import {
  Grid,
  Link,
  AppBar,
  useTheme,
  InputBase,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  ModeNightRounded,
  WbSunnyRounded,
  Search,
  AccountCircle,
  ShoppingCart,
} from '@mui/icons-material';
import { useCustomTheme } from '../../contexts/CustomThemeContext.tsx';

const DrawerHeader: React.FC = () => {
  const { mode, toggleTheme } = useCustomTheme();
  const theme = useTheme();
  console.log('mode:', mode);
  console.log('Theme palette:', theme.palette.primary.main);
  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: theme.palette.primary.main, padding: '0.5rem' }}
    >
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Your Logo
        </Typography>
        {/* Add navigation links */}
        <Typography variant='body1' sx={{ marginRight: 3, display: { xs: 'none', sm: 'block' } }}>
          Home
        </Typography>
        <Typography variant='body1' sx={{ marginRight: 3, display: { xs: 'none', sm: 'block' } }}>
          Products
        </Typography>
        <Typography variant='body1' sx={{ marginRight: 3, display: { xs: 'none', sm: 'block' } }}>
          Contact
        </Typography>
        {/* Search bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}>
          <InputBase
            placeholder='Search…'
            sx={{ padding: '0 0.5rem', backgroundColor: 'white', borderRadius: 1 }}
          />
          <IconButton>
            <Search />
          </IconButton>
        </Box>
        {/* User icons */}
        <IconButton>
          <AccountCircle />
        </IconButton>
        <IconButton>
          <ShoppingCart />
        </IconButton>
        <IconButton
          onClick={toggleTheme}
          size='small'
          color='inherit'
          aria-label='Theme toggle button'
        >
          {mode === 'dark' ? (
            <WbSunnyRounded fontSize='small' />
          ) : (
            <ModeNightRounded fontSize='small' />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, color: 'white', padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant='subtitle1'>Policy</Typography>
          <Link href='#' color='inherit'>
            Privacy Policy
          </Link>
          <Link href='#' color='inherit'>
            Terms & Conditions
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='subtitle1'>Follow Us</Typography>
          <Typography>Twitter | Instagram</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='body2'>© 2024, Your Shop Name</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main', padding: '0.5rem', textAlign: 'center' }}>
        <Typography variant='caption' color='white'>
          For orders with both in-stock and pre-order items, the shipment will be processed once all
          items are available.
        </Typography>
      </Box>
      <DrawerHeader />
      <Box sx={{ padding: 2 }}>{children}</Box>

      <Footer />
    </>
  );
};
export default Layout;
