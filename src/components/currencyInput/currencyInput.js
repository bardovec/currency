import React from 'react';
import { NativeSelect, TextField } from "@material-ui/core";
import useStyles from "./style";

const CurrencyInput = ({onChangeCurrency, onChangeAmount, amount}) => {
  const classes = useStyles();
  return (
    <div className={classes.mainInput}>
      <TextField
        className={classes.searchInput}
        value={amount}
        onChange={onChangeAmount}
        label="Валюта"
      />
      <NativeSelect

        defaultValue={'none'}
        onChange={onChangeCurrency}
      >
        <option value={'none'}>Выберите</option>
        <option value={'UAH'}>UAH</option>
        <option value={'USD'}>USD</option>
        <option value={'EUR'}>EUR</option>
      </NativeSelect>
    </div>
  );
};

export default CurrencyInput;
