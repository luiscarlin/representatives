import reducer from './'
import { SET_ADDRESS } from '../actions/types'

describe('Address Search Reducer', () => {
  const INITIAL_STATE = {
    address: ''
  }

  it('returns the initial state as default', () => {
    const state = reducer(undefined, { type: 'hello' })
    expect(state).toEqual(INITIAL_STATE)
  })

  it('returns the current state when cannot handle action', () => {
    let currentState = {
      address: 'something'
    }
    const nextState = reducer(currentState, { type: 'what', value: 'do you want' })
    expect(nextState).toEqual(currentState)
  })


  describe('when given the action to set address', () => {
    const currentState = {
      address: '123'
    }

    const action = {
      type: SET_ADDRESS,
      value: '4'
    }

    it('returns a new state with only address field updated', () => {
      const expectedState = Object.assign({}, currentState, { address: '4' })
      const nextState = reducer(currentState, action)
      expect(nextState).toEqual(expectedState)
    })
  })
})
