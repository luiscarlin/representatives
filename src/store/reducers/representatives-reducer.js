import DEFAULT_STATE from './default-state'
import actionTypes from '../actionTypes'

export default (state = DEFAULT_STATE.representatives, action) => {
  switch (action.type) {
    case actionTypes.representatives.SET_REPRESENTATIVES:
      return Object.assign({}, state, { data: action.value })
    default:
      return state
  }
}
