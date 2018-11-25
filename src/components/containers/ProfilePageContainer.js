import connect from "react-redux/es/connect/connect";
import ProfilePage from "../presenters/ProfilePage";
import selectors from "../../store/selectors";

const mapStateToProps = state => ({
  representativeInfo: selectors.modal.representativeInfoForModal(state),
  shouldDisplayModal: selectors.modal.shouldShowModalForRepresentative(state)
})

export default connect(mapStateToProps)(ProfilePage)

