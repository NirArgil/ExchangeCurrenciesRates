import { GET_EUROtoUSD, GET_EUROtoUSD_Error, SET_END_DATE_EUROtoUSD, SET_START_DATE_EUROtoUSD } from '../types'
import axios from 'axios'

export const getEUROtoUSD = (START, END) => async dispatch => {

    try {

        const response = await axios.get(`https://freecurrencyapi.net/api/v2/historical?apikey=36102830-5814-11ec-960d-23b34454283e&base_currency=EUR&date_from=${START}&date_to=${END}`)

        const array = Object.entries(response.data.data).flat();

        const filteredRatesArray = (array.filter(function (element, index) {
            return (index % 2 === 1);
        }));

        const filteredDaysArray = (array.filter(function (element, index) {
            return (index % 2 === 0);
        }));

        const EUROtoUSD = filteredRatesArray.map(element => element.USD);


        dispatch({
            type: GET_EUROtoUSD,
            payload: { rates: EUROtoUSD, days: filteredDaysArray }
        })
    }

    catch (e) {
        dispatch({
            type: GET_EUROtoUSD_Error,
            payload: console.log(e),
        })
    }

}

export const setStartDate = (startDate) => async dispatch => {

    dispatch({
        type: SET_START_DATE_EUROtoUSD,
        payload: startDate
    })
}

export const setEndDate = (endDate) => async dispatch => {

    dispatch({
        type: SET_END_DATE_EUROtoUSD,
        payload: endDate
    })
}