import { FC, ReactNode } from 'react';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IMenuItemProps {
  text: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
}

const MenuItem: FC<IMenuItemProps> = ({ text, onClick, icon }) => {
  const theme = useTheme();

  return (
    <ListItem onClick={onClick} sx={{ padding: theme.spacing(1, 2) }}>
      {icon}
      <ListItemText
        primary={
          <Typography variant='body1' sx={{ color: theme.palette.text.primary }}>
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MenuItem;
