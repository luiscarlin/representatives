import types from '../actionTypes'

const showModalForRepresentative = (name) => {
  return {
    type: types.modal.DISPLAY_MODAL_FOR_REPRESENTATIVE,
    value: name
  }
}

export default { showModalForRepresentative }