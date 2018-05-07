import { SET_ADDRESS } from '../types'

const getSetAddressAction = (address) => {
  return {
    type: SET_ADDRESS,
    value: address
  }
}

export { getSetAddressAction }
