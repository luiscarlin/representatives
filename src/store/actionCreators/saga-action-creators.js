import types from '../actionTypes'

const retrieveRepresentatives = () => {
  return {
    type: types.saga.RETRIEVE_REPRESENTATIVES,
  }
}

export default { 
  retrieveRepresentatives 
}
