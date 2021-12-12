import moment from 'moment'
import { GET_USDtoGBP, SET_END_DATE_USDtoGBP, SET_START_DATE_USDtoGBP } from '../types'

const initialState = {
    USDtoGBPrates: [],
    USDtoGBPdays: [],
    startDate: moment().toDate(),
    endDate: moment().toDate(),
    loading: true
}

const USDtoGBPReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USDtoGBP:
            return {
                ...state,
                USDtoGBPrates: action.payload.rates,
                USDtoGBPdays: action.payload.days,
                loading: false
            }

        case SET_START_DATE_USDtoGBP:

            return {
                ...state,
                startDate: action.payload
            }

        case SET_END_DATE_USDtoGBP:

            return {
                ...state,
                endDate: action.payload
            }

        default:
            return state;
    }

}

export default USDtoGBPReducer;