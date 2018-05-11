import AddressSearch from '../presenters/address-search-section'
import AddressSearchContainer from './address-search-section-container'

describe('Address Search Connector', () => {
  it('renders an address search component', () => {
    const mountedComponent = mountComponentWithState(<AddressSearchContainer />, {})
    expect(mountedComponent.node.find(AddressSearch)).toHaveLength(1)
  })

  // test('dispatches action to clear display when clicked', () => {
  //   let mountedComponent = mountComponentWithState(<AllCancelButtonConnector value="hello" />, {})
  //   mountedComponent.node.find('button').simulate('click')
  //   expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(getClearDisplayAction())
  // })
})