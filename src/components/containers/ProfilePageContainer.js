import ProfilePage from "../presenters/ProfilePage";
import selectors from "../../store/selectors";
import { connect } from 'react-redux'
import actionCreators from "../../store/actionCreators";

const mapStateToProps = state => ({
  representativeInfo: selectors.modal.representativeInfoForModal(state),
  shouldDisplayModal: selectors.modal.shouldShowModalForRepresentative(state)
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(actionCreators.modal.hideModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

