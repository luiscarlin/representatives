import { combineReducers } from 'redux'
import * as AddressSearch from '../modules/AddressSearch'

const rootReducer = combineReducers({
  addressSearch: AddressSearch.reducer
})

export default rootReducer