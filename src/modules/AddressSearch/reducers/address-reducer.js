import { SET_ADDRESS_TYPE } from '../../actions/types'

const DEFAULT_STATE = {
  address: ''
}

const addressSearch = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ADDRESS_TYPE:
      return Object.assign({}, state, { address: action.value })
    default:
      return state
  }
}

export default addressSearch
