import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CartDesktopView from './CartDesktopView'
import CartMobileView from './CartMobileView'
const Cart = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 900px)');

  return (
    <div>
                  {!isSmallScreen && (
                    <CartDesktopView/>
                  )}
                  {isSmallScreen && (
                    <CartMobileView/>
                  )}
    </div>
  )
}

export default Cart
