import addressSearchActionCreators from './address-search-action-creators'
import types from '../actionTypes'

describe('Address Search Action Creators', () => {
  it('#setAddress should set the address', () => {
    const expectedAction = {
      type: types.addressSearch.SET_ADDRESS,
      value: 'my house'
    }
    expect(addressSearchActionCreators.setAddress('my house')).toEqual(expectedAction)
  })
})