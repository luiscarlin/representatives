import { combineReducers } from 'redux'
import { reducer as AddressSearchReducer } from '../modules/AddressSearch'

const rootReducer = combineReducers({
  addressSearch: AddressSearchReducer
})

export default rootReducer
