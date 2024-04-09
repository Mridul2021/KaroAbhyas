import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from 'react';
function Login() {
  const buttonStyles = {
    variant: "outlined",
    size: "medium",
    textTransform: 'none',
    color: 'white',
    borderColor: 'black',
    backgroundColor: 'black',
  };
  const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  };

  const textFieldStyle = {
    marginBottom: '16px',
  };

  const signUpTextStyle = {
    marginTop: '16px',
  };

  return (
    <div style={rootStyle} >
      <form style={{ border: '1px solid silver', paddingLeft: '3vw', padding: '10vh', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', ...formStyle }}>
        <TextField
          style={textFieldStyle}
          label="NAME"
          variant="outlined"
          fullWidth
          autoFocus
        />
        <TextField
          style={textFieldStyle}
          label="EMAIL"
          type="EMAIL"
          variant="outlined"
          fullWidth
        />
        <Link style={{ textTransform: "none" }} to={{ pathname: "/" }}>

          <Button style={buttonStyles}>
            Login
          </Button>
        </Link>

        <Typography variant="body2" style={signUpTextStyle}>
          Don't have an account?
          <Link style={{ textTransform: "none" }} to={{ pathname: "/signup" }}>

            <Button>
              Sign UP
            </Button>
          </Link>
        </Typography>
      </form>
    </div>
  );
}

export default Login;
