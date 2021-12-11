import { SET_END_DATE, SET_START_DATE } from "../types"

export const setStartDate = (startDate) => async dispatch => {      
      
    dispatch({ 
           type: SET_START_DATE, 
           payload: startDate
        }) 
}

export const setEndDate = (endDate) => async dispatch => {
    
    dispatch({ 
        type: SET_END_DATE,
        payload: endDate
    })
}