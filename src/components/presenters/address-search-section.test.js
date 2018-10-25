import AddressSearch from './address-search-section'
import Autocomplete from 'react-google-autocomplete';

describe('Address Search', () => {
  let subject, onSearchClickSpy

  beforeEach(() => {
    onSearchClickSpy = jest.fn()
    subject = shallow(<AddressSearch onSearchClick={ onSearchClickSpy } />)
  })

  it('renders search box with google autocomplete omitting business addresses', () => {
    expect(subject.find(Autocomplete)).toHaveLength(1)
    expect(subject.find(Autocomplete).props().types).toContainEqual('geocode')
  })

  it('renders search box with google autocomplete only for US', () => {
    expect(subject.find(Autocomplete).props().componentRestrictions).toEqual({country: "us"})
  })

  it('renders search box with placeholder "Search with your address..."', () => {
    expect(subject.find(Autocomplete).props().placeholder).toBe('Search with your address...')
  })

  it('renders a search box with onSearchClick function as onPlaceSelected handler', () => {
    subject.find(Autocomplete).props().onPlaceSelected({formatted_address: 'Columbus, OH'})

    expect(onSearchClickSpy).toHaveBeenCalledWith('Columbus, OH')
  })
})
