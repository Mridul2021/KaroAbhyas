import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
const Orders = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

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
            <Grid container sx={{ border: '1px solid silver',borderLeft: !isSmallScreen ? '1px solid silver' : 'none',borderRight: !isSmallScreen ? '1px solid silver' : 'none', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                <Grid container sx={{ border: '1px solid silver',borderLeft: !isSmallScreen ? '1px solid silver' : 'none',borderRight: !isSmallScreen ? '1px solid silver' : 'none', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                    <Grid item sm={12}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '700' }}>
                            ORDER #1293
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Grid container alignItems="center">
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '17px', fontWeight: '700' }}>
                                    PRODUCT: <br />
                                    DATE: <br />
                                    ADDRESS: <br />
                                    <br />
                                    <br />
                                    <br />
                                    {isSmallScreen && <br />}
                                </Typography>
                            </Grid>
                            <Grid item xs={5.2}>
                                <Typography sx={{ fontSize: '17px', fontWeight: '200' }}>
                                    Sample Book Name <br />
                                    10/04/2021 <br />
                                    R107, AJMERA INFINITY <br />
                                    KARUNA NAGAR,{isSmallScreen && <br />}
                                     ELECTRONIC CITY, <br />
                                    BANGALORE, INDIA <br />
                                    PIN: 846009
                                </Typography>
                            </Grid>
                            <Grid item sm={2.8} xs={12}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                                        VIEW DETAILS
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
                                        TRACK ORDER
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
                                        DOWNLOAD INVOICE
                                    </Button>
                                </div>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ border: '1px solid silver',borderLeft: !isSmallScreen ? '1px solid silver' : 'none',borderRight: !isSmallScreen ? '1px solid silver' : 'none', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                <Grid container sx={{ border: '1px solid silver',borderLeft: !isSmallScreen ? '1px solid silver' : 'none',borderRight: !isSmallScreen ? '1px solid silver' : 'none', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                    <Grid item sm={12}>
                        <Typography sx={{ fontSize: '30px', fontWeight: '700' }}>
                            ORDER #1293
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Grid container alignItems="center">
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '17px', fontWeight: '700' }}>
                                    PRODUCT: <br />
                                    DATE: <br />
                                    ADDRESS: <br />
                                    <br />
                                    <br />
                                    <br />
                                    {isSmallScreen && <br />}
                                </Typography>
                            </Grid>
                            <Grid item xs={5.2}>
                                <Typography sx={{ fontSize: '17px', fontWeight: '200' }}>
                                    Sample Book Name <br />
                                    10/04/2021 <br />
                                    R107, AJMERA INFINITY <br />
                                    KARUNA NAGAR, {isSmallScreen && <br />}
                                    ELECTRONIC CITY, <br />
                                    BANGALORE, INDIA <br />
                                    PIN: 846009
                                </Typography>
                            </Grid>
                            <Grid item sm={2.8} xs={12}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                                        VIEW DETAILS
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
                                        TRACK ORDER
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
                                        DOWNLOAD INVOICE
                                    </Button>
                                </div>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            
        </div>
    )
}

export default Orders
