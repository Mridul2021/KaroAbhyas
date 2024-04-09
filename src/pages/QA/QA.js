import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Orders = () => {
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
            <Grid container sx={{ border: '1px solid silver', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
            <Grid item sm={8}>
                <TextField
                    id="filled-search"
                    type="search"
                    variant="filled"
                    fullWidth
                    
                    sx={{
                        paddingBottom: '1vh'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton size="large">
                                    <SearchIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                </Grid>
                <Grid item sm={0.4}>
                    <Typography>
                        Or
                    </Typography>
                </Grid>
                <Grid item sm={3.6}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                                        ASK A NEW QUESTION
                                    </Button>
                                </div>
                            </Grid>
                <Grid container sx={{ border: '1px solid silver', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>

                    <Grid item xs={12} sm={12}>
                        <Grid container alignItems="center">
                            <Grid item sm={12}>
                                <Typography sx={{ fontSize: '30px', fontWeight: '700' }}>
                                    QUESTION TITLE
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Typography sx={{ fontSize: '17px', fontWeight: '700' }}>
                                    MODULE: <br />
                                    DATE: <br />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>

                                <Typography sx={{ fontSize: '17px', fontWeight: '200' }}>
                                    NAME OF MODULE <br />
                                    10/04/2021 <br />
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={3}>
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
                                        START
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
