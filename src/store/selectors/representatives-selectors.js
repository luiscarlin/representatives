const getRepresentatives = state => state.representatives.data

const isFetching = state => state.representatives.fetching

const getRepresentativeInfo = (state, name) => {
  const currentRepresentative = state.representatives.data.filter(rep => hyphenatedName(rep.name) === name)

  return currentRepresentative[0]
}

const hyphenatedName = (name) => (name.replace(/ +/g, '-').replace('.', '').toLowerCase())

export default {
  getRepresentatives,
  isFetching,
  getRepresentativeInfo
}
