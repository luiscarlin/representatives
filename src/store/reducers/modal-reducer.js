import actionTypes from '../actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.modal.DISPLAY_MODAL_FOR_REPRESENTATIVE:
      return { ...state, ...{ representativeName: action.value }}
    case actionTypes.modal.HIDE_MODAL:
      return { ...state, ...{ representativeName: '' }}
    default:
      return state
  }
}
