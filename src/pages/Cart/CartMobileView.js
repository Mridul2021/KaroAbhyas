import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Cart = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width: 600px) and (max-width: 900px)');
    const isLargeScreen = useMediaQuery('(min-width:901px)');
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
            <Grid container>
                <Grid item xs={12} sm={9} sx={{marginLeft:'20px', marginTop:'20px'}}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '700', marginRight: 'auto', display: 'flex', alignItems: 'center' }}>
                        TOTAL: ₹2000
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} sx={{marginLeft:'20px', marginTop:'5px'}}>
                    <Button
                        style={{
                            marginTop:'10px',
                            padding: '13px',
                            color: 'black',
                            transition: 'color 0.3s',
                            '&:hover': {
                                color: 'green',
                            },
                            ...buttonStyles
                        }}
                    >
                        CHECKOUT
                    </Button>
                </Grid>
            </Grid>
            <Grid container marginTop="5vh">
                <Grid item xs={12} sm={12}>
                    <Grid container alignItems="center" style={{ border: '1px solid silver', borderRight: 'none',padding:'10px', borderLeft: 'none', whiteSpace: 'nowrap' }}>
                        <Grid item xs={12} sm={9}>
                            <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                                QUESTION TITLE <br />
                                Module: <span style={{ fontWeight: '500' }}>NAME OF MODULE <br /></span>
                                DATE: <span style={{ fontWeight: '500' }}>10/04/2024 <br /></span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button
                                style={{
                                    margin: '5px',
                                    padding: '10px',
                                    color: 'black',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: 'green',
                                    },
                                    ...buttonStyles
                                }}
                            >
                                1
                            </Button>
                            <Button
                                style={{
                                    margin: '5px',
                                    padding: '10px',
                                    color: 'black',
                                    transition: 'color 0.3s',
                                    '&:hover': {
                                        color: 'green',
                                    },
                                    ...buttonStyles
                                }}
                            >
                                DELETE
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
};

export default Cart;
