import { GET_USDtoGBP, GET_USDtoGBP_Error, SET_END_DATE_USDtoGBP, SET_START_DATE_USDtoGBP } from '../types'
import axios from 'axios'

export const getUSDtoGBP = (START, END) => async dispatch => {

    try {
        const response = await axios.get(`https://freecurrencyapi.net/api/v2/historical?apikey=36102830-5814-11ec-960d-23b34454283e&base_currency=USD&date_from=${START}&date_to=${END}`)

        const array = Object.entries(response.data.data).flat();

        const filteredRatesArray = (array.filter(function (element, index) {
            return (index % 2 === 1);
        }));

        const filteredDaysArray = (array.filter(function (element, index) {
            return (index % 2 === 0);
        }));

        const USDtoGBP = filteredRatesArray.map(element => element.GBP);

        dispatch({
            type: GET_USDtoGBP,
            payload: { rates: USDtoGBP, days: filteredDaysArray }
        })
    }

    catch (e) {
        dispatch({
            type: GET_USDtoGBP_Error,
            payload: console.log(e),
        })
    }

}

export const setStartDate = (startDate) => async dispatch => {

    dispatch({
        type: SET_START_DATE_USDtoGBP,
        payload: startDate
    })
}

export const setEndDate = (endDate) => async dispatch => {

    dispatch({
        type: SET_END_DATE_USDtoGBP,
        payload: endDate
    })
}