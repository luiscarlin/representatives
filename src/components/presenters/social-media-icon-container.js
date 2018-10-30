import React from 'react'
import './social-media-icon-container.scss'

export default ({socialMedia}) => {

  const buildSocialMedia = () => {
    const socialMediaList = socialMedia

    if (!socialMediaList) {
      return
    }
    return socialMediaList.map((socialMedia, index) => {
      let hrefValue

      switch(socialMedia.site) {
        case "GooglePlus":
          hrefValue = `https://plus.google.com/${socialMedia.handle}`
          return <a href={hrefValue} key={index} target='_blank'><i className='fab fa-google-plus-square' /></a>
        case "Twitter":
          hrefValue = `https://twitter.com/${socialMedia.handle}`
          return <a href={hrefValue} key={index} target='_blank'><i className='fab fa-twitter-square' /></a>
        case "Facebook":
          hrefValue = `https://facebook.com/${socialMedia.handle}`
          return <a href={hrefValue} key={index} target='_blank'><i className='fab fa-facebook-square' /></a>
        case "YouTube":
          hrefValue = `https://youtube.com/${socialMedia.handle}`
          return <a href={hrefValue} key={index} target='_blank'><i className='fab fa-youtube-square' /></a>
        default:
          console.log('Social media', socialMedia.name, 'not recognized')
          return <span></span>
      }
    })
  }

  return (
    <div className='social-media'>
     { buildSocialMedia() }
    </div>
  )
}