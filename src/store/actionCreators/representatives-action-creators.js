import types from '../actionTypes'

const setRepresentatives = (data) => {
  return {
    type: types.representatives.SET_REPRESENTATIVES,
    value: data
  }
}

const setFetchingRepresentatives = (value) => {
  return {
    type: types.representatives.SET_FETCHING_REPRESENTATIVES,
    value: value
  }
}

export default {
  setRepresentatives,
  setFetchingRepresentatives
}
