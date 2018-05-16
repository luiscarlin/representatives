import representativesActionCreators from './representatives-action-creators'
import types from '../actionTypes'

describe('Representatives Action Creators', () => {
  it('#setRepresentatives should create an action to set the representatives data', () => {
    const expectedAction = {
      type: types.representatives.SET_REPRESENTATIVES,
      value: 'some data'
    }
    expect(representativesActionCreators.setRepresentatives('some data')).toEqual(expectedAction)
  })
})
