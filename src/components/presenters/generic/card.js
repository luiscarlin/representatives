import React from 'react'

export default ({ name, photoUrl }) => (
  <div>
    <div className='photo'>
      <img src={photoUrl}/>
    </div>
  </div>
)
