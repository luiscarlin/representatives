import React from 'react'
import './profile-page.scss'

class ProfilePage extends React.Component {

  render() {
    const currentRepresentative = this.props.representativeInfo(this.props.match.params.name)

    return <div className='profile-container'>
      Hello {currentRepresentative && currentRepresentative.name}
    </div>
  }
}

export default ProfilePage