import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, marginTop: '20px' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['JOIN US', 'Classes', 'Products', 'About Us', 'Profile', 'Cart'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* Use Link from react-router-dom for navigation */}
                            <Link to={text === 'Classes' ? './classes' : text === 'Products' ? './products' : text === 'About Us' ? './about' : text === 'Profile' ? './login' : text === 'Cart' ? './cart' : '#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <Button onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </Button>
                </div>
                <div style={{ flexGrow: 1 }}>
                    <h1>Karo Abhyas</h1>
                </div>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

        </div>
    );
}
