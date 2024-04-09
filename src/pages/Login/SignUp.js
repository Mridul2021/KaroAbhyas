import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from 'react';
function SignUp() {
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
    border: '1px solid silver',
    paddingLeft: '3vw',
    padding:'10vh',
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '340px',
  };

  const textFieldStyle = {
    marginBottom: '16px', // equivalent to theme.spacing(2)
  };

  const signUpTextStyle = {
    marginTop: '16px', // equivalent to theme.spacing(2)
  };

  const rowContainerStyle = {
    alignItems: 'center',
  };

  return (
    <div style={{paddingTop: '30px', paddingLeft: '20vw', paddingRight: '20vw',...rootStyle}}>
      <form style={formStyle}>
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
        <div>
          <TextField
            style={{ marginRight: '16px', ...textFieldStyle }}
            label="PHONE NUMBER"
            type="phone number"
            variant="outlined"
          />
          <Button style={{padding:'15px',...buttonStyles}}>
            SEND OTP
          </Button>
        </div>

        <Typography variant="body2" style={signUpTextStyle}>
          Din't Receive it?
          <Button>
            RESEND
          </Button>
        </Typography>
        <TextField
            style={{ marginRight: '16px', ...textFieldStyle }}
            label="OTP"
            type="OTP"
            variant="outlined"
            fullWidth
          />
                  <Button style={{padding:'15px',...buttonStyles}}>
        SIGN UP
        </Button>
        <Typography variant="body2" style={signUpTextStyle}>
          Don't have an account?
          <Link style={{ textTransform: "none" }} to={{ pathname: "/login" }}>

            <Button>
              Sign UP
            </Button>
          </Link>
        </Typography>
      </form>
    </div>
  );
}

export default SignUp;
