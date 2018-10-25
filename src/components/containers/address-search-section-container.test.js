import AddressSearch from '../presenters/address-search-section'
import AddressSearchContainer from './address-search-section-container'
import actionCreators from '../../store/actionCreators'
import Autocomplete from 'react-google-autocomplete';

describe('Address Search Connector', () => {
  let mountedComponent

  beforeEach(() => {
    mountedComponent = mountComponentWithState(<AddressSearchContainer />, {})
  })

  it('renders an address search component', () => {
    expect(mountedComponent.node.find(AddressSearch)).toHaveLength(1)
  })

  describe('when search button is clicked', () => {
    it('dispatches a call to set the addres in the store', () => {
      mountedComponent.node.find(Autocomplete).props().onPlaceSelected({formatted_address: 'some address'})

      expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(actionCreators.addressSearch.setAddress('some address'))
    })

    it('dispatches a call to retrieve representatives', () => {
        mountedComponent.node.find(Autocomplete).props().onPlaceSelected({formatted_address: 'some address'})

      expect(mountedComponent.dispatchMock).toHaveBeenCalledWith(actionCreators.saga.retrieveRepresentatives())
    })
  })
})
