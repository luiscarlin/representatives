import types from '../actionTypes'

const showModalForRepresentative = (name) => {
  return {
    type: types.modal.DISPLAY_MODAL_FOR_REPRESENTATIVE,
    value: name
  }
}

const hideModal = () => {
  return {
    type: types.modal.HIDE_MODAL,
  }
}

export default { showModalForRepresentative, hideModal }
