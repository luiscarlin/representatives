import React from 'react'
import './profile-page.scss'

const ProfilePage = ({ match }) => (
  <div className='profile-container'>
    Hello {match.params.name}
  </div>
)

export default ProfilePage