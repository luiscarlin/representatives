import { combineReducers } from 'redux'
import addressSearchReducer from './address-search-reducer'
import representativesReducer from './representatives-reducer'
import modalReducer from './modal-reducer'

export default combineReducers({
  addressSearch: addressSearchReducer,
  representatives: representativesReducer,
  modal: modalReducer
})
