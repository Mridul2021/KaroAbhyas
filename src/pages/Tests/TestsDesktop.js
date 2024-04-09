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
                <Grid container sx={{ border: '1px solid silver', paddingLeft: '3vw', paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '3vw', whiteSpace: 'nowrap' }}>
                        <Grid container alignItems="center">
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '30px', fontWeight: '700' }}>
                                TEST NAME
                            </Typography>
                        </Grid>
                            <Grid xs={4}>
                                <Typography sx={{ fontSize: '17px', fontWeight: '700' }}>
                                    MODULE: <br />
                                    DATE: <br />
                                    MARKS: <br />
                                    DURATION: <br />
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                            
                                <Typography sx={{ fontSize: '17px', fontWeight: '200' }}>
                                    NAME OF MODULE <br />
                                    10/04/2021 <br />
                                    100 <br />
                                    30 Mins <br />
                                </Typography>
                            </Grid>
                            
                            <Grid item sm={2} xs={12}>
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
            
    </div>
  )
}

export default Orders
