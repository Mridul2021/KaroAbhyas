import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery } from '@mui/material';
import MobileNavbar from './MobileNavbar'
const Navbar = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width: 600px) and (max-width: 900px)');
    const isLargeScreen = useMediaQuery('(min-width:901px)');
    const isLaptopScreen = useMediaQuery('(min-width: 1024px)');
    const buttonStyles = {
        variant: "outlined",
        size: "medium",
        textTransform: 'none',
        color: 'white',
        borderColor: 'black',
        backgroundColor: 'black',
    };
    return (
        <div>
            <Box
                style={{
                    paddingTop:'8px',
                    paddingBottom:'8px',
                    width: '100vw',
                    height: '60px',
                    boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.1)',
                    position: 'fixed',
                    backgroundColor: 'white',
                    zIndex: 9999, // Make sure navbar stays on top
                }}
            >
            {!isSmallScreen && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: '10px',
                    }}
                >
                    <Typography variant="h6" component="div">
                        Karo Abhyas
                    </Typography>
                    <div>
                        <Button
                            style={{
                                padding: '10px',
                                color: 'black',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'green',
                                },
                                ...buttonStyles
                            }}
                        >
                            JOIN US
                        </Button>
                        <Link style={{ textTransform: "none" }} to={{ pathname: "/classes" }}>
                            <Button
                                sx={{ mx: 1 }} // Add space between buttons
                                style={{
                                    padding: '10px',
                                    color: 'black',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: 'green',
                                    },
                                }}
                            >
                                Classes
                            </Button>
                        </Link>
                        <Link style={{ textTransform: "none" }} to={{ pathname: "/products" }}>
                            <Button
                                sx={{ mx: 1 }} // Add space between buttons
                                style={{
                                    padding: '10px',
                                    color: 'black',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: 'green',
                                    },
                                }}
                            >
                                PRODUCTS
                            </Button>
                        </Link>
                        <Link style={{ textTransform: "none" }} to={{ pathname: "/about" }}>
                            <Button
                                sx={{ mx: 1 }} // Add space between buttons
                                style={{
                                    padding: '10px',
                                    color: 'black',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: 'green',
                                    },
                                }}
                            >
                                ABOUT US
                            </Button>
                        </Link>
                        <Link style={{ textTransform: "none" }} to={{ pathname: "/login" }}>
                        <Button
                            style={{
                                padding: '10px',
                                color: 'black',
                                transition: 'color 0.3s',
                                '&:hover': {
                                    color: 'green',
                                },
                            }}
                        >
                            <PersonIcon style={{ color: 'black' }} />
                        </Button>
                        </Link>
                        <Link style={{ textTransform: "none" }} to={{ pathname: "/cart" }}>

                            <Button
                                style={{
                                    padding: '10px',
                                    color: 'black',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: 'green',
                                    },
                                }}
                            >
                                <ShoppingCartIcon style={{ color: 'black' }} />
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
            {isSmallScreen && (
            <MobileNavbar/>
            )}
            </Box>
            {/* Add padding to content */}
            <div style={{ paddingTop: '70px' }}>
                {/* Your content goes here */}
            </div>
        </div>
    );
};

export default Navbar;
