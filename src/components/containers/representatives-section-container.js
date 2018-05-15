import { connect } from 'react-redux'
import representativesSection from '../presenters/representatives-section'

const mapStateToProps = state => ({
  representatives: state.representatives.data
})

export default connect(mapStateToProps)(representativesSection)
