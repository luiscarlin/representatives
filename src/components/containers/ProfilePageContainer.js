import connect from "react-redux/es/connect/connect";
import ProfilePage from "../presenters/ProfilePage";
// import actionCreators from "../../store/actionCreators";
import selectors from "../../store/selectors";

const mapStateToProps = state => ({
  representativeInfo: (name) => selectors.representatives.getRepresentativeInfo(state, name)
})

export default connect(mapStateToProps)(ProfilePage)

