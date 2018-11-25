import React from 'react'
import './profile-page.scss'

class ProfilePage extends React.Component {

  render() {
    const classes = []
    classes.push('profile-modal')
    if (!this.props.shouldDisplayModal) {
      classes.push('hidden')
    }

    return <div className={classes.join(' ')}>
      <div className='representative-name'>{this.props.representativeInfo.name}</div>
    </div>
  }
}

export default ProfilePage