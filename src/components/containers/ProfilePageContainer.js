import ProfilePage from "../presenters/ProfilePage";
import selectors from "../../store/selectors";
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  representativeInfo: selectors.modal.representativeInfoForModal(state),
  shouldDisplayModal: selectors.modal.shouldShowModalForRepresentative(state)
})

export default connect(mapStateToProps)(ProfilePage)

