
export default (rawRepresentativesData) => {
  console.log('raw representatives', rawRepresentativesData)
  let representatives = rawRepresentativesData.officials
  return representatives.map(rep => convert(rep))
}

const convert = (rawRepresentative) => {
  // return {
  //   name: rawRepresentative.name,
  //   party: rawRepresentative.party,
  //   email: rawRepresentative.emails,
  //   phone: rawRepresentative.phones,
  //   photoUrl: rawRepresentative.photoUrl,
  //   urls: rawRepresentative.urls
  // }
  return {
    website: 'https://www.whitehouse.gov/',
    photoUrl: "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
    office: 'President of the United States',
    email: 'hello@bye.com',
    name: "Donald J. Trump",
    party: 'Republican',
    phone: "(202) 456-1111",
    address: {
      name: 'The WhiteHouse',
      street: '1600 Pennsylvania Avenue NW',
      city: 'Washington',
      state:'DC',
      zip: '20500'
    },
    socialMedia: [
      {
        site: 'GooglePlus',
        handle: '+whitehouse'
      },
      {
        site: 'Facebook',
        handle: 'whitehouse'
      },
      {
        site: 'Twitter',
        handle: 'potus'
      },
      {
        site: 'YouTube',
        handle: 'whitehouse'
      }
    ]
  }
}


