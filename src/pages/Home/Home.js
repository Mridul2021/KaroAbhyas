import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Orders from '../Orders/Orders';
import TestDesktop from '../Tests/TestsDesktop'
import QADesktop from '../QA/QA'
const Cart = () => {
    const [selectedButton, setSelectedButton] = useState('ORDERS');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
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
        backgroundColor: 'silver',
    };
    return (
        <div style={isLaptopScreen ? { paddingTop: '80px', paddingLeft: '20vw', paddingRight: '20vw' } : {}}>
            <Grid container style={{ border: '1px solid silver',borderLeft: !isSmallScreen ? '1px solid silver' : 'none',borderRight: !isSmallScreen ? '1px solid silver' : 'none', paddingLeft: '3vw' }}>
                <Grid item sm={4} >
                    <Typography sx={{
                        fontWeight: '600',
                        paddingTop: '5vh',
                        fontSize: '30px'
                    }}>
                        Amit Jha
                    </Typography>
                    <Typography sx={{
                        paddingTop: '2vh'
                    }}>
                        +91 774690033
                    </Typography>
                    <Typography sx={{
                        paddingTop: '2vh'
                    }}>
                        amit.jha6700@gmail.com
                    </Typography>
                    <Button
                        style={{
                            backgroundColor: 'black',
                            marginTop: '2vh',
                            marginBottom: '5vh',
                            paddingLeft: '22px',
                            paddingRight: '22px',

                            variant: "outlined",
                            size: "medium",
                            textTransform: 'none',
                            color: 'white',
                            borderColor: 'black',
                        }}
                    >
                        EDIT
                    </Button>
                    <Button
                        style={{
                            backgroundColor: 'black',
                            marginTop: '2vh',
                            marginBottom: '5vh',
                            paddingLeft: '22px',
                            paddingRight: '22px',
                            marginLeft:'10px',
                            variant: "outlined",
                            size: "medium",
                            textTransform: 'none',
                            color: 'white',
                            borderColor: 'black',
                        }}
                    >
                        LOGOUT
                    </Button>
                </Grid>
                <Grid item sm={4} >
                    <Typography sx={{
                        fontWeight: '600',
                        paddingTop: { xs: '1px', sm: '5vh' }, fontSize: '30px'
                    }}>
                        ADDRESS
                    </Typography>
                    <Typography sx={{
                        paddingTop: '2vh',
                        marginBottom: '5vh',

                    }}>
                        R107, AJMERA INFINITY <br />
                        KARUNA NAGGAR, ELECTRONIC CITY, <br />
                        BANGALORE, INDIA <br />
                        PIN: 846009
                    </Typography>

                </Grid>
            </Grid>
            {/* <Orders/> */}
            {/* <TestDesktop/> */}
            <Grid container>
               
            <Grid item xs={12} sm={12} style={{ border: '1px solid silver', padding: '3vh 3vw', whiteSpace: 'nowrap' }}>
                    <Button
                        onClick={() => handleButtonClick('ORDERS')}
                        style={{
                            padding: '13px',
                            margin: '5px',
                            color: selectedButton === 'ORDERS' ? 'white' : 'white',
                            backgroundColor: selectedButton === 'ORDERS' ? 'black' : 'silver',
                            transition: 'color 0.3s',
                            boxShadow: 'inset 0px 8px 8px -8px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        ORDERS
                    </Button>
                    <Button
                        onClick={() => handleButtonClick('TESTS')}
                        style={{
                            padding: '13px',
                            margin: '5px',
                            color: selectedButton === 'TESTS' ? 'white' : 'white',
                            backgroundColor: selectedButton === 'TESTS' ? 'black' : 'silver',
                            transition: 'color 0.3s',
                            boxShadow: 'inset 0px 8px 8px -8px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        TESTS
                    </Button>
                    <Button
                        onClick={() => handleButtonClick('Q/A')}
                        style={{
                            padding: '13px',
                            margin: '5px',
                            color: selectedButton === 'Q/A' ? 'white' : 'white',
                            backgroundColor: selectedButton === 'Q/A' ? 'black' : 'silver',
                            transition: 'color 0.3s',
                            boxShadow: 'inset 0px 8px 8px -8px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        Q/A
                    </Button>
                </Grid>
            </Grid>

            {selectedButton === 'ORDERS' && <Orders />}
            {selectedButton === 'TESTS' && <TestDesktop />}
            {selectedButton === 'Q/A' && <QADesktop />}


        </div>
    );
};

export default Cart;
