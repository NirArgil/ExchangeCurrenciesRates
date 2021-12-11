import { GET_EUROtoUSD } from '../types'

const initialState = {
    EUROtoUSDrates: [],
    EUROtoUSDdays: [],
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
        default:
            return state;
    }

}

export default EUROtoUSDReducer;