import { connect } from 'react-redux'
import addressSearchSection from '../presenters/address-search-section'
import actionCreators from '../../store/actionCreators'

const mapDispatchToProps = dispatch => ({
  onSearchClick: (address) => {
    dispatch(actionCreators.addressSearch.setAddress(address))
    dispatch(actionCreators.saga.retrieveRepresentatives())
  }
})

export default connect(null, mapDispatchToProps)(addressSearchSection)
