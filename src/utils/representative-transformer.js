
export default (data) => {
  console.log('raw representatives', data)
  const { offices, officials, divisions } = data

  let addressLinesTransform = address => {
    let lines = []
    Object.keys(address).forEach(key => {
      if (key.includes('line')) {
        lines.push(address[key])
      }
    })
    return lines
  }

  let transformed = officials.map(rep => {
    return {
      name: rep.name,
      email: rep.emails ? rep.emails[0] : undefined,
      address: rep.address ? {
        lines: addressLinesTransform(rep.address[0]),
        city: rep.address[0].city,
        state: rep.address[0].state,
        zip: rep.address[0].zip
      } : undefined,
      party: rep.party,
      phone: rep.phones ? rep.phones[0] : undefined,
      website: rep.urls && rep.urls[0],
      photoUrl: rep.photoUrl,
      socialMedia: rep.channels && rep.channels.map(ch => ({ site: ch.type, handle: ch.id }))
    }
  })

  offices.forEach(office => {
    office.officialIndices.forEach(index => {
      transformed[index].office = office.name
    })
  })

  Object.keys(divisions).forEach(divisionIndex => {
    let currentDivision = divisions[divisionIndex]
    if(currentDivision.officeIndices) {
      currentDivision.officeIndices.forEach(index => { // TODO - i think this is failing
        transformed[index].division = currentDivision.name
      })
    }
   
  })

  console.log('transformed', transformed)

  return transformed
}
