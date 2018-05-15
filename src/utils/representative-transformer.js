
export default (rawRepresentativesData) => {
  console.log('raw representatvies', rawRepresentativesData)
  let representatives = rawRepresentativesData.officials
  return representatives.map(rep => convert(rep))  
}

const convert = (rawRepresentative) => {
  console.log('converting', rawRepresentative)
  return {
    name: rawRepresentative.name,
    party: rawRepresentative.party,
    phones: rawRepresentative.phones,
    photoUrl: rawRepresentative.photoUrl,
    urls: rawRepresentative.urls
  }
}
