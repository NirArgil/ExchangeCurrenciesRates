import { combineReducers } from 'redux';
import EUROtoUSDReducer from './EUROtoUSDReducer';
import USDtoGBPReducer from './USDtoGBPReducer';

export default combineReducers({
  EUROtoUSD: EUROtoUSDReducer,
  USDtoGBP: USDtoGBPReducer,
})