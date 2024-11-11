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
            display: 'flex',
            width: 250,
            backgroundColor: theme.palette.primary.dark,
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
            <ListItemText primary='Home' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Account' />
          </ListItem>
          <ListItem>
            <ListItemText primary='About' />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default MenuDrawer;
