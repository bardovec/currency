import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Typography
} from '@material-ui/core';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { convertCurToEur, convertCurToUsd } from '../../actions/currency';

const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const [usdCur, setUsdCur] = useState(1)
  const [eurCur, setEurCur] = useState(1)
  useEffect(() => {
    dispatch(convertCurToUsd(setUsdCur))
    dispatch(convertCurToEur(setEurCur))
  })


  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Box className={classes.brandContainer}>
        <Typography className={classes.heading} variant='h2' align='center'>Currency exchange</Typography>
      </Box>
      {usdCur} Usd /
      {eurCur} EUR
    </AppBar>
  );
};

export default Navbar;
