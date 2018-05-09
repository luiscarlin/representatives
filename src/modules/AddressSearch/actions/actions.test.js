import { SET_ADDRESS } from './types'
import { setAddress } from './actions'

describe('Location Actions', () => {
  it('creates an action to set address', () => {
    const text = 'something'

    const expectedAction = {
      type: SET_ADDRESS,
      value: text
    }
    expect(setAddress(text)).toEqual(expectedAction)
  })
})
