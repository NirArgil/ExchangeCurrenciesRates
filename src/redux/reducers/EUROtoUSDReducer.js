import moment from 'moment'
import { GET_EUROtoUSD, SET_END_DATE_EUROtoUSD, SET_START_DATE_EUROtoUSD } from '../types'

const initialState = {
    EUROtoUSDrates: [],
    EUROtoUSDdays: [],
    startDate: moment().toDate(),
    endDate: moment().toDate(),
    loading: true
}

const EUROtoUSDReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_EUROtoUSD:

            return {
                ...state,
                EUROtoUSDrates: action.payload.rates,
                EUROtoUSDdays: action.payload.days,
                loading: false
            }

        case SET_START_DATE_EUROtoUSD:

            return {
                ...state,
                startDate: action.payload
            }

        case SET_END_DATE_EUROtoUSD:

            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state;
    }

}

export default EUROtoUSDReducer;