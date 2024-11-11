import { FC } from 'react';
import { Grid, Link, Typography, useTheme } from '@mui/material';

const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Grid
      color={theme.palette.text.primary}
      sx={{ backgroundColor: theme.palette.primary.main, p: theme.spacing(1) }}
      container
      justifyContent='space-around'
    >
      <Grid item md={4}>
        <Typography variant='body1'>© 2024, &STORE</Typography>
      </Grid>
      <Grid container md={4} item gap={2}>
        Follow us:
        <Link href='#' color='inherit'>
          Twitter
        </Link>
        <Link href='#' color='inherit'>
          Instagram
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
