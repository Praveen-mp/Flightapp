import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@mui/material/colors';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import hicon from '../images/NavLogo.png';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none', // Hide the hamburger menu on large screens
    },
  },
  title: {
    display: 'flex', // Added flex display
    alignItems: 'center', // Vertically align items
    flexGrow: 1,
    fontWeight: 'bold',
  },
  logo: {
    width: '100px', // Adjust the width of the logo
    height: '70px', // Adjust the height of the logo
    marginRight: '10px', // Add some right margin
  },
  drawerPaper: {
    width: 250,
  },
  navLinks: {
    [theme.breakpoints.down('md')]: {
      display: 'none', // Hide the buttons on medium and smaller screens
    },
  },
  button: {
    marginRight: theme.spacing(2),
    color: 'black',
    fontWeight: 'bold',
  },
}));

function Header() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuItems = [
    { text:'Home', link: '/home'},
    { text: 'Book', link: '/search' },
    { text: 'My Booking', link: '/mybooking' },
    { text: 'Check in', link: '#home' },
    { text: 'Reservation', link: '/search' },
    {text:'Profile',link:'/profile'},
    { text: 'About', link: '/about' },
    
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigateTo = (link) => {
    // Handle the redirection for each menu item
    window.location.href = link;
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuOpenIcon sx={{ color: pink[500] }} />
          </IconButton>
          <div className={classes.title}>
            <img
              src={hicon}
              width="100"
              height="70"
              className={classes.logo}
              alt="Your Logo"
            />
            <Typography variant="h6" sx={{fontFamily:'Gill Sans Extrabold',color:'red'}}>
              LightningTravel
            </Typography>
          </div>
          <div className={classes.navLinks}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                className={classes.button}
                onClick={() => navigateTo(item.link)}
              >
                {item.text}
              </Button>
            ))}
            <Button className={classes.button} onClick={()=>window.location.href="/login"}>
              Log in
            </Button>
          </div>
          {mobileOpen && (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuOpenIcon sx={{ color: pink[500] }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      navigateTo(item.link);
                      handleMenuClose();
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
                <MenuItem onClick={()=>window.location.href="/login"}>Log in</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                navigateTo(item.link);
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {
              navigateTo();
              handleDrawerToggle();
            }}
          >
            <ListItemText primary="Log in" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
