import React from 'react'
import './profile-page.scss'
import capitolSvg from "../../assets/capitol.svg";
import Img from "react-image";

class ProfilePage extends React.Component {

  render() {
    console.log('rep ', this.props.representativeInfo)

    const classes = []
    classes.push('profile-modal')
    if (!this.props.shouldDisplayModal) {
      classes.push('hidden')
    }

    return <div className={classes.join(' ')}>
        <div className='top-banner'>
          <div className='info'>
            <Img
              src={[this.props.representativeInfo.photoUrl, capitolSvg]}
              loader={<img src={capitolSvg} alt={this.props.representativeInfo.name}/>}
            />
            <div className='name'>{this.props.representativeInfo.name}</div>
            <div className='office'>{this.props.representativeInfo.office}</div>
            <div className='party'>{this.props.representativeInfo.party}</div>
          </div>
        </div>
      <div className='division'>{this.props.representativeInfo.division}</div>
    </div>
  }
}

export default ProfilePage