import types from '../actionTypes'

const setAddress = (address) => {
  return {
    type: types.SET_ADDRESS,
    value: address
  }
}

export default { 
  setAddress 
}
