import sagaActionCreators from './saga-action-creators'
import addressSearchActionCreators from './address-search-action-creators'
import representativesActionCreators from './representatives-action-creators'
import modalActionCreators from './modal-action-creators'

export default {
  saga: sagaActionCreators,
  addressSearch: addressSearchActionCreators,
  representatives: representativesActionCreators,
  modal: modalActionCreators
}
