import { connect } from 'react-redux'
import addressSearchSection from '../presenters/address-search-section'

const mapDispatchToProps = dispatch => ({
  onSearchClick: (address) => {
    console.log(address, 'storeAddress > onButtonClick clicked')
  }
})

export default connect(null, mapDispatchToProps)(addressSearchSection)
