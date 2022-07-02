import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import useStyles from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyInput from '../currencyInput/currencyInput';
import { convertCur } from '../../actions/currency';



const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(state => state.currency)
    const [currencyAmount, setCurrencyAmount] = useState(true)
    const [currencyRate, setCurrencyRate] = useState(1)
    const [amount, setAmount] = useState(1)
    const [curValue, setCurValue] = useState({
        firstInput: '',
        secondInput: ''
    })
    const [curName, setCurName] = useState({
        firstSelect: '',
        secondSelect: ''
    })

    useEffect(() => {
        if (curName.firstSelect !== "" && curName.secondSelect !== "") {
            const res = dispatch(convertCur(curName.firstSelect, curName.secondSelect, setCurrencyRate))
        }

    }, [curName.firstSelect, curName.secondSelect])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setCurrencyAmount(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setCurrencyAmount(false)
    }
    let toCur, fromCur
    if (currencyAmount) {
        fromCur = amount
        toCur = (amount * currencyRate).toFixed(2)

    } else {
        toCur = amount
        fromCur = (amount / currencyRate).toFixed(2)

    }


    return (
            <Container>
                <Grid container justifyContent="space-around"
                      spacing={3}>
                    <Box className={classes.main}>
                    <CurrencyInput
                      amount={fromCur}
                      onChangeAmount={handleFromAmountChange}
                      onChangeCurrency={(e) => setCurName({...curName, firstSelect: e.target.value})}/>
                    <CurrencyInput
                      onChangeCurrency={(e) => setCurName({...curName, secondSelect: e.target.value})}
                      onChangeAmount={handleToAmountChange}
                      amount={toCur}
                    />
                    </Box>

                </Grid>
            </Container>
    );
};

export default Home;
