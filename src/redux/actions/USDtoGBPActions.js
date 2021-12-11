import { GET_USDtoGBP, GET_USDtoGBP_Error } from '../types'
import axios from 'axios'

export const getUSDtoGBP = () => async dispatch => {

    try {
        const response = await axios.get('https://freecurrencyapi.net/api/v2/historical?apikey=36102830-5814-11ec-960d-23b34454283e&base_currency=USD&date_from=2021-12-01&date_to=2021-12-08')

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