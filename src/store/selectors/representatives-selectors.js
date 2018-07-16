const getRepresentatives = state => state.representatives.data
const isFetching = state => state.representatives.fetching
export default {
  getRepresentatives,
  isFetching
}
