import types from '../actionTypes'

const setRepresentatives = (data) => {
  return {
    type: types.representatives.SET_REPRESENTATIVES,
    value: data
  }
}

export default { 
  setRepresentatives 
}
