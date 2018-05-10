import DEFAULT_STATE from './default-state'
import actionTypes from '../actionTypes'

export default (state = DEFAULT_STATE.addressSearch, action) => {
  switch (action.type) {
    case actionTypes.addressSearch.RESET_STATE:
      return Object.assign({}, DEFAULT_STATE.addressSearch)
    default:
      return state
  }
}
