import React from 'react'
import Card from './generic/card'
import './representatives-section.scss'

const representativeCards = (representatives) => (
  representatives.map((rep, index) => <Card person={rep} key={index} />)
)

const oneRep = () => {
  const rep = {
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
  return <Card person={rep} />
}

export default ({ representatives }) => (
  <div className='representatives-section'>
    {/*{ oneRep() }*/}
  </div>
)