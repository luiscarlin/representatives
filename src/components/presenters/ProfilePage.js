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
            <div className='office'>
              {this.props.representativeInfo.office} - {this.props.representativeInfo.party} Party
            </div>
          </div>
        </div>
      <div className='carousel-container'>
        <div className='carousel-header'>Recent Tweets</div>
        <Carousel>
          <div>
            <img src={require("../../assets/twitter-placeholder.png")} alt={''} />
          </div>
          <div>
            <img src={require("../../assets/twitter-placeholder.png")} alt={''} />
          </div>
          <div>
            <img src={require("../../assets/twitter-placeholder.png")} alt={''} />
          </div>
          <div>
            <img src={require("../../assets/twitter-placeholder.png")} alt={''} />
          </div>
        </Carousel>
      </div>
    </div>
  }
}

export default ProfilePage