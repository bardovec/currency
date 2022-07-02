import { FETCH_ALL, FETCH_EUR } from '../constants/actionTypes'
import * as api from '../api'



export const convertCur = (cur1, cur2, setCurrencyRate) => async (dispatch) => {
    try {
        const {data} = await api.fetchCurrency(cur1,cur2)
        const curRate = Object.values(data.result)[0]
        setCurrencyRate(curRate)
        dispatch({type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }


}
export const convertCurToEur = (setEurCur) => async (dispatch) => {
    try {
        const {data} = await api.fetchCurrencyEur()
        const curRate = Object.values(data.result)[0].toFixed(2)
        setEurCur(curRate)
        dispatch({type: FETCH_EUR, payload: data})
    } catch (error) {
        console.log(error.message)
    }


}
export const convertCurToUsd = (setUsdCur) => async (dispatch) => {
    try {
        const {data} = await api.fetchCurrencyUsd()
        const curRate = Object.values(data.result)[0].toFixed(2)
        setUsdCur(curRate)
    } catch (error) {
        console.log(error.message)
    }


}
