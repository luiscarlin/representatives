import selectors from "./";

const representativeForModal = state => state.modal.representativeName

const shouldShowModalForRepresentative = state => !!representativeForModal(state)

const representativeInfoForModal = state => {
  const allReps = selectors.representatives.getRepresentatives(state)

  return allReps.find(rep => rep.name === representativeForModal(state)) || {}
}



export default { shouldShowModalForRepresentative, representativeInfoForModal }
