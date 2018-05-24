import React from 'react'

export default ({ person }) => (
  <div className='card-container'>
    <div className='photo'>
      <img src={person.photoUrl} alt={person.name}/>
      <div className='name'>{person.name}</div>
      <div className='email'>{person.email}</div>
      <div className='phone'>{person.phone}</div>
      <div className='address'>{person.address}</div>
    </div>
  </div>
)
