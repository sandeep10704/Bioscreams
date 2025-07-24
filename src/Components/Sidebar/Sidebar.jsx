import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <List>
      <Box>hii</Box>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/orders">
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem button component={Link} to="/products">
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button component={Link} to="/categories">
        <ListItemText primary="Categories" />
      </ListItem>
      <ListItem button component={Link} to="/customers">
        <ListItemText primary="Customers" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
