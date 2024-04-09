import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, Button } from '@mui/material';
import Box from '@mui/material';

const Classes = () => {
    const buttonStyles = {
        variant: "outlined",
        size: "medium",
        textTransform: 'none',
        color: 'white',
        borderColor: 'black',
        backgroundColor: 'black',
    };

    const gridContainers = Array.from({ length: 5 }, (_, index) => (
        <Grid container spacing={4} key={index} sx={{marginTop:'20px', marginBottom:'20px'}}>
            <Grid item sm={4} sx={{ backgroundColor: 'silver', height: '35vh', width: '100%' }}>

            </Grid>
            <Grid item sm={6} sx={{ marginLeft: '20px' }}>
                <Typography sx={{
                    fontWeight: '800'
                }}>
                    Sample Video Title
                </Typography>
                <Typography sx={{
                    fontWeight: '540'
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
                    PRACTISE
                </Button>
            </Grid>
        </Grid>
    ));

    return (
        <div style={{ paddingTop: '150px', paddingLeft: '15vw', paddingRight: '15vw' }}>
            {gridContainers}
        </div>
    );
};

export default Classes;
