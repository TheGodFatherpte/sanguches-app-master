import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

import useStyles from './styles';

import logo from '../../assets/logo.png';


export const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      {
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" width="200px" height="25px" className={classes.image} />
              Sanguches
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      }
    </>

  )
}

export default Navbar