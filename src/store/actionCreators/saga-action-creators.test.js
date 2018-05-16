import sagaActionCreators from './saga-action-creators'
import types from '../actionTypes'

describe('Saga Action Creators', () => {
  it('#retrieveRepresentatives should create an action to get representatives', () => {
    const expectedAction = {
      type: types.saga.RETRIEVE_REPRESENTATIVES
    }
    expect(sagaActionCreators.retrieveRepresentatives()).toEqual(expectedAction)
  })
})
