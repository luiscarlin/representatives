import AddressSearch from './address-search-section'
import SearchBox from './generic/search-box'

describe('Address Search', () => {
  let subject, onSearchClickSpy

  beforeEach(() => {
    onSearchClickSpy = jest.fn()
    subject = shallow(<AddressSearch onSearchClick={ onSearchClickSpy } />)
  })

  it('renders a SearchBox element with placeholder "Enter your address"', () => {
    expect(subject.find(SearchBox)).toHaveLength(1)
    expect(subject.find(SearchBox).props().placeholder).toBe('Enter your address')
  })
  
  it('renders a SearchBox element with onSearchClick function as buttonClick handler', () => {
    expect(subject.find(SearchBox)).toHaveLength(1)
    expect(subject.find(SearchBox).props().onButtonClick).toBe(onSearchClickSpy)
  })
})
