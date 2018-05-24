import React from 'react'

export default ({ person }) => (
  <div>
    <div className='photo'>
      <img src={person.photoUrl}/>
      <div className='name'>{person.name}</div>
      <div className='email'>{person.email}</div>
      <div className='phone'>{person.phone}</div>
      <div className='address'>{person.address}</div>
    </div>
  </div>
)
