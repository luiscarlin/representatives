import { combineReducers } from 'redux'
import addressSearchReducer from './address-search-reducer'

export default combineReducers({
  addressSearch: addressSearchReducer
})
