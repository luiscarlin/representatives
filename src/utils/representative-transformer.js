
export default (rawRepresentativesData) => {
  console.log('raw representatives', rawRepresentativesData)
  let representatives = rawRepresentativesData.officials
  return representatives.map(rep => convert(rep))  
}

const convert = (rawRepresentative) => {
  return {
    name: rawRepresentative.name,
    party: rawRepresentative.party,
    email: rawRepresentative.emails,
    phone: rawRepresentative.phones,
    photoUrl: rawRepresentative.photoUrl,
    urls: rawRepresentative.urls
  }
}
