import { connect } from 'react-redux'
import representativesSection from '../presenters/representatives-section'
import selectors from '../../store/selectors'

const mapStateToProps = state => ({
  representatives: selectors.representatives.getRepresentatives()
})

export default connect(mapStateToProps)(representativesSection)
