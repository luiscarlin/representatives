import React from 'react'

export default ({ name, email, phone, address, photoUrl }) => (
  <div>
    <div className='photo'>
      <img src={photoUrl}/>
      <div className='name'>{name}</div>
      <div className='email'>{email}</div>
      <div className='phone'>{phone}</div>
      <div className='address'>{address}</div>
    </div>
  </div>
)
