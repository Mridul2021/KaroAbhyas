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
        <div style={{ paddingTop: '80px', paddingLeft: '20vw', paddingRight: '20vw' }}>
            <Grid container>
                <Grid item xs={12} sm={9} style={{ border: '1px solid silver', borderRight: 'none', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '0', whiteSpace: 'nowrap' }}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '700', marginRight: 'auto', display: 'flex', alignItems: 'center' }}>
                        TOTAL: ₹2000
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} style={{ border: '1px solid silver', borderLeft: 'none', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        style={{
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
            <Grid container sx={{ border: '1px solid silver', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                <Grid container sx={{ border: '1px solid silver', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                    <Grid item xs={12} sm={12}>
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={9}>
                                <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                                    QUESTION TITLE <br />
                                    Module: <span style={{ fontWeight: '500' }}>NAME OF MODULE <br /></span>
                                    DATE: <span style={{ fontWeight: '500' }}>10/04/2024 <br /></span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems:'row' }}>
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
            </Grid>

        </div>
    );
};

export default Cart;
