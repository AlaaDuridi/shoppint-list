import React from 'react';
import {
  Grid,
  Link,
  AppBar,
  useTheme,
  Drawer,
  List,
  Divider,
  ListItemText,
  ListItem,
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
  Menu,
  Close,
} from '@mui/icons-material';
import { useCustomTheme } from '../../contexts/CustomThemeContext.tsx';
import { useState } from 'react';

const DrawerHeader: React.FC = () => {
  const { mode, toggleTheme } = useCustomTheme();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{ backgroundColor: theme.palette.primary.main, padding: '0.5rem' }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ display: { xs: 'block', md: 'none', sm: 'none', lg: 'none' } }}
            onClick={() => toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
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
            <InputBase placeholder='Search…' sx={{ padding: '0 0.5rem', borderRadius: 1 }} />
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

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'primary.main',
            color: 'white',
            width: '250px',
            padding: '1rem',
          },
        }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>Menu</Typography>
          <IconButton onClick={() => toggleDrawer(false)} color='inherit'>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: 'white', marginY: 2 }} />
        <List>
          <ListItem sx={{ padding: '0.5rem 0' }}>
            <ListItemText primary='Artist' sx={{ typography: 'body1', color: 'inherit' }} />
          </ListItem>
          <ListItem sx={{ padding: '0.5rem 0' }}>
            <ListItemText
              primary={
                <Box display='flex' alignItems='center'>
                  2025 Season's Greetings
                  <Box
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '0 0.3rem',
                      borderRadius: '4px',
                      marginLeft: '0.5rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    New
                  </Box>
                </Box>
              }
              sx={{ typography: 'body1', color: 'inherit' }}
            />
          </ListItem>
          <ListItem sx={{ padding: '0.5rem 0' }}>
            <ListItemText
              primary='Official Fanlights'
              sx={{ typography: 'body1', color: 'inherit' }}
            />
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'white', marginY: 2 }} />
        <Box sx={{ padding: '1rem 0' }}>
          <Typography variant='subtitle2' color='inherit'>
            Account
          </Typography>
          <Typography variant='caption' color='inherit'>
            For orders with both in-stock and pre-order items, the shipment will be processed once
            all items are available.
          </Typography>
          <Typography variant='body2' sx={{ marginTop: '1rem' }}>
            Jordan (USD $)
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: 3 }}>
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
      <Box sx={{ padding: 2, flex: '1 0 auto' }}>{children}</Box>

      <Footer />
    </Grid>
  );
};
export default Layout;
