import React from 'react'
import './card.scss'

export default ({ person }) => (
  <div className='card'>
    <img className='image' src={person.photoUrl} alt={person.name}/>
    <div>
      <div className='name'>{person.name}</div>
      <div className='email'>{person.email}</div>
      <div className='phone'>{person.phone}</div>
      <div className='address'>{person.address}</div>
    </div>
  </div>
)
