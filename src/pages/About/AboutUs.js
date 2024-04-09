import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Typography, Button } from '@mui/material'
import Box from '@mui/material'
const AboutUs = () => {
    const buttonStyles = {
        variant: "outlined",
        size: "medium",
        textTransform: 'none',
        color: 'white',
        borderColor: 'black',
        backgroundColor: 'black',
    };
    return (
        <div style={{ paddingTop: '150px', paddingLeft: '15vw', paddingRight: '15vw' }}>
            <Grid container spacing={4}>
                <Grid item sm={4} sx={{ backgroundColor: 'silver', height: '40vh', width: '100%' }}>

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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                    </Typography>
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                    </Typography>
                </Grid>
                <Grid item sm={4} sx={{ backgroundColor: 'silver', height: '40vh', width: '100%' }}>

                </Grid>
            </Grid>
        </div>
    )
}

export default AboutUs
