import types from '../actionTypes'

const setAddress = (address) => {
  return {
    type: types.addressSearch.SET_ADDRESS,
    value: address
  }
}

export default { 
  setAddress 
}
