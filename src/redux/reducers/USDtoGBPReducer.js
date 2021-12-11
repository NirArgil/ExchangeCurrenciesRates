import { GET_USDtoGBP } from '../types'

const initialState = {
    USDtoGBPrates: [],
    USDtoGBPdays: [],
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
        default:
            return state;
    }

}

export default USDtoGBPReducer;