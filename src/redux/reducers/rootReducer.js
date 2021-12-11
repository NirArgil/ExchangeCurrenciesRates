import { combineReducers } from 'redux';
import datesReducers from './datesReducers';
import EUROtoUSDReducer from './EUROtoUSDReducer';
import USDtoGBPReducer from './USDtoGBPReducer';

export default combineReducers({
  EUROtoUSD: EUROtoUSDReducer,
  USDtoGBP: USDtoGBPReducer,
  Dates: datesReducers
})