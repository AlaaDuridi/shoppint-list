import {
  AppBar as MUIAppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';
import {
  AccountCircle,
  Menu,
  ModeNightRounded,
  Search,
  ShoppingCart,
  WbSunnyRounded,
} from '@mui/icons-material';
import { FC, SetStateAction, Dispatch } from 'react';
import { useCustomTheme } from '../../contexts/CustomThemeContext.tsx';

interface IAppBar {
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const AppBar: FC<IAppBar> = ({ setIsDrawerOpen, setIsCartOpen }) => {
  const { mode, toggleTheme } = useCustomTheme();
  const theme = useTheme();

  return (
    <MUIAppBar position='static' sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        {/* small screen icon to open left drawer*/}
        <IconButton
          edge='start'
          color='inherit'
          onClick={() => setIsDrawerOpen(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <Menu />
        </IconButton>

        {/* Header part one: Header Logo  */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
          <Typography variant='h6'>Logo</Typography>
        </Box>

        {/*Header part two: Header nav */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6'>Your Logo</Typography>
          <Grid container gap={2} ml={theme.spacing(1)}>
            <Grid item>
              <Typography>Home</Typography>
            </Grid>
            <Grid item>
              <Typography>Contact</Typography>
            </Grid>
            <Grid item>
              <Typography>About</Typography>
            </Grid>
          </Grid>
        </Box>

        {/*Header part three:  toolbar */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: theme.spacing(2) }}>
          {/* Header searchbar  */}
          <Box
            marginLeft={theme.spacing(1)}
            pl={theme.spacing(1)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 1,
              border: '1px white solid',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: theme.spacing(1) }}>
              <InputBase placeholder='Search…' />
            </Box>
            <IconButton>
              <Search />
            </IconButton>
          </Box>
          {/*Header toolbar items */}
          <Box>
            <IconButton>
              <AccountCircle />
            </IconButton>
            <IconButton onClick={() => setIsCartOpen(true)}>
              <ShoppingCart />
            </IconButton>
            <IconButton onClick={toggleTheme}>
              {mode === 'dark' ? <WbSunnyRounded /> : <ModeNightRounded />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
