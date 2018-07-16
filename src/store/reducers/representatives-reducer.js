import DEFAULT_STATE from './default-state'
import actionTypes from '../actionTypes'

export default (state = DEFAULT_STATE.representatives, action) => {
  switch (action.type) {
    case actionTypes.representatives.SET_REPRESENTATIVES:
      return { ...state, ...{ data: action.value }}
    case actionTypes.representatives.SET_FETCHING_REPRESENTATIVES:
      return { ...state, ...{ fetching: action.value }}
    default:
      return state
  }
}
