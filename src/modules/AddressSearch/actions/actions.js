import { SET_ADDRESS } from './types'

const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    value: address
  }
}

export { setAddress }
