import moment from "moment";
import { SET_END_DATE, SET_START_DATE } from "../types";

const initialState = {
    keyword: "",
    sortBy: "amount",
    startDate: 2021/12/1,
    endDate: 2021/12/1
}

const datesReducers = (state = initialState, action) => {
    switch (action.type) {

        case SET_START_DATE:

            return {
                ...state,
                startDate: action.payload
            }

        case SET_END_DATE:

            return {
                ...state,
                endDate: action.payload
            }
        default:
            return state;
    }

}

export default datesReducers