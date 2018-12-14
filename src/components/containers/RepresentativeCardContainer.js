import { connect } from 'react-redux'
import actionCreators from '../../store/actionCreators'
import Card from '../presenters/generic/card'

const mapDispatchToProps = dispatch => ({
  showProfileModal: (name) => dispatch(actionCreators.modal.showModalForRepresentative(name))
})

export default connect(null, mapDispatchToProps)(Card)