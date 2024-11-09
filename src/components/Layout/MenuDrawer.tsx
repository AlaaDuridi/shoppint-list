import { FC, Dispatch, SetStateAction } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface IMenuDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuDrawer: FC<IMenuDrawerProps> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            padding: theme.spacing(2),
          },
        }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>Menu</Typography>
          <IconButton onClick={() => setIsDrawerOpen(false)} color='inherit'>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: 'white', my: 2 }} />
        <List>
          <ListItem>
            <ListItemText primary='Artist' />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  2025 Season's Greetings
                  <Box
                    component='span'
                    sx={{
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '0 4px',
                      marginLeft: '8px',
                      borderRadius: '4px',
                    }}
                  >
                    New
                  </Box>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary='Official Products' />
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'white', my: 2 }} />
        <Box>
          <Typography variant='subtitle2'>Account</Typography>
          <Typography variant='caption'>
            For orders with both in-stock and pre-order items, the shipment will be processed once
            all items are available.
          </Typography>
          <Typography variant='body2' mt={1}>
            Jordan (USD $)
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
export default MenuDrawer;
