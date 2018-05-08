import { SET_ADDRESS } from './types'

const getSetAddressAction = (address) => {
  return {
    type: SET_ADDRESS_TYPE,
    value: address
  }
}

export { getSetAddressAction }
