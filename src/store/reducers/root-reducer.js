import { combineReducers } from 'redux'
import addressSearchReducer from './address-search-reducer'
import representativesReducer from './representatives-reducer'

export default combineReducers({
  addressSearch: addressSearchReducer,
  representatives: representativesReducer
})
