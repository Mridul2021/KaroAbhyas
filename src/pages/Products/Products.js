import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Grid } from '@mui/material';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Products = () => {
    const buttonStyles = {
        variant: "outlined",
        size: "medium",
        textTransform: 'none',
        color: 'white',
        borderColor: 'black',
        backgroundColor: 'black',
    };
    return (
        <div style={{ paddingTop: '100px', paddingLeft: '15vw', paddingRight: '15vw' }}>
            <TextField
            id="filled-search"
            type="search"
            variant="filled"
            fullWidth
            sx={{
                paddingBottom:'10vh'
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton size="large">
                            <SearchIcon sx={{color:'black'}}/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
            <Grid container spacing={4}>
                <Grid item sm={3} sx={{ backgroundColor: 'silver', height: '50vh', width: '100%' }}>

                </Grid>
                <Grid item sm={6.5} sx={{ marginLeft: '20px' }}>
                    <Typography sx={{
                        fontWeight: '800',
                        fontSize: '20px'
                    }}>
                        Product Name
                    </Typography>
                    <Typography sx={{
                        fontWeight: '540'
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged                    </Typography>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '30px',
                        marginTop: '60px'
                    }}>
                        ₹1500
                    </Typography>
                    <Button
                        style={{
                            padding: '10px',
                            color: 'black',
                            transition: 'color 0.3s',
                            '&:hover': {
                                color: 'green',
                            },
                            marginTop: '10px',
                            ...buttonStyles
                        }}
                    >
                        ADD TO CART
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products
