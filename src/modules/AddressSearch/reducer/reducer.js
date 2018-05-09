import { SET_ADDRESS } from '../actions/types'

const DEFAULT_STATE = {
  address: ''
}

export default function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return Object.assign({}, state, { address: action.value })
    default:
      return state
  }
}
