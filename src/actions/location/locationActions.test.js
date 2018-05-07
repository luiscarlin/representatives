import SET_ADDRESS_TYPE from '../types'
import { getSetAddressAction } from './'

describe('Location Actions', () => {
  it('creates an action to set address', () => {
    const text = 'something'

    const expectedAction = {
      type: SET_ADDRESS_TYPE,
      value: text
    }
    expect(getSetAddressAction(text)).toEqual(expectedAction)
  })
})
