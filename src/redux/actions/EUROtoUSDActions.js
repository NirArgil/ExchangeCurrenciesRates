import { GET_EUROtoUSD, GET_EUROtoUSD_Error } from '../types'
import axios from 'axios'
import { useSelector } from 'react-redux';

export const getEUROtoUSD = () => async dispatch => {
    // const startDATE = useSelector((state) => (state.Dates.startDate));
    // console.log(startDATE);

    try {
        const response = await axios.get('https://freecurrencyapi.net/api/v2/historical?apikey=36102830-5814-11ec-960d-23b34454283e&base_currency=EUR&date_from=2021-12-01&date_to=2021-12-08')

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