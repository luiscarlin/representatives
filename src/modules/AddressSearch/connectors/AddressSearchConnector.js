import { connect } from 'react-redux'
import AddressSearch from '../components/AddressSearch.jsx'

const mapDispatchToProps = dispatch => ({
  onSearchClick: (address) => {
    console.log(address, 'storeAddress > onButtonClick clicked')
  }
})

export default connect(null, mapDispatchToProps)(AddressSearch)
