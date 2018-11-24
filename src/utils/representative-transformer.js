
export default (data) => {
  console.log('raw representatives', data)

  const { offices, officials, divisions } = data

  let transformedRepresentatives = officials.map(rep => transformRepresentative(rep))

  addOfficeToRepresentatives(offices, transformedRepresentatives)

  Object.keys(divisions).forEach(divisionName => {
    let {name, officeIndices} = divisions[divisionName]

    addDivisionsToRepresentatives(name, officeIndices, transformedRepresentatives)
  })

  console.log('transformed', transformedRepresentatives)

  return transformedRepresentatives
}

const transformRepresentative = (rep) => ({
  name: rep.name,
  email: rep.emails ? rep.emails[0] : undefined,
  address: rep.address ? {
      lines: transformAddress(rep.address[0]),
      city: rep.address[0].city,
      state: rep.address[0].state,
      zip: rep.address[0].zip
  } : undefined,
  party: rep.party,
  phone: rep.phones ? rep.phones[0] : undefined,
  website: rep.urls && rep.urls[0],
  photoUrl: rep.photoUrl,
  socialMedia: rep.channels && rep.channels.map(ch => ({ site: ch.type, handle: ch.id })),
})

const transformAddress = (address) => {
  return Object.keys(address)
      .filter(key => key.includes('line'))
      .map(key => address[key])
}

const addOfficeToRepresentatives = (offices, representatives) => {
    offices
      .map(office => ({name: office.name, indices: office.officialIndices}))
      .forEach(({name, indices}) => indices.forEach(index => representatives[index].office = name))
}

const addDivisionsToRepresentatives = (name, officeIndices, representatives) => {
    officeIndices = officeIndices || []

    officeIndices.forEach(index => {
        representatives[index].division = name
    })
}
