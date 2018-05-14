import { connect } from 'react-redux'
import addressSearchSection from '../presenters/address-search-section'
import actionCreators from '../../store/actionCreators'
import fetchRepresentatives from '../../services/fetch-representatives-service'

const mapDispatchToProps = dispatch => ({
  onSearchClick: (address) => {
    dispatch(actionCreators.addressSearch.setAddress(address))
    fetchRepresentatives(address).then(console.log)

  }
})

export default connect(null, mapDispatchToProps)(addressSearchSection)
