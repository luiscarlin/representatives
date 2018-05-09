import AddressSearch from './AddressSearch.jsx'
import SearchBox from '../../../lib/SearchBox'

describe('Address Search', () => {
  it('renders a SearchBox element with placeholder "Enter your address"', () => {
    const subject = shallow(<AddressSearch/>)
    expect(subject.find(SearchBox)).toHaveLength(1)
    expect(subject.find(SearchBox).props().placeholder).toBe('Enter your address')
  })
})
