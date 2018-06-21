import React from 'react'
import './card.scss'

export default ({ person }) => {
  const { address } = person
  const cityStateZip = `${address.city} ${address.state}, ${address.zip}`

  return (
    <figure className='card'>
      <div className='image'>
        <img src={person.photoUrl} alt={person.name} />
      </div>
      <figcaption className='caption'>
        <div className='name'>{person.name}</div>
        <div className='office'>{person.office}</div>
        <div className='party'>{person.party}</div>
        <div className='email'>{person.email}</div>
        <div className='phone'>{person.phone}</div>
        <div className='address'>
          <div className='address-name'>{address.name}</div>
          <div className='address-street'>{address.street}</div>
          <div className='address-city-state-zip'>{cityStateZip}</div>
        </div>
        <div className='social-media'>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-google-plus-square"></i>
          <i className="fab fa-youtube-square"></i>
        </div>
      </figcaption>
    </figure>
  )
}
