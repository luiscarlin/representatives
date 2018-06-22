import React from 'react'
import './card.scss'

export default ({ person }) => {
  const { address } = person
  const cityStateZip = `${address.city} ${address.state}, ${address.zip}`
  const socialMedia = person.socialMedia

  const buildSocialMedia = (socialMediaList) => {
    return socialMediaList.map(socialMedia => {
      if (socialMedia.site === 'GooglePlus') {
        const hrefValue = `https://plus.google.com/${socialMedia.handle}`
        return <a href={hrefValue}><i className='fab fa-google-plus-square'/></a>
      }
      else if (socialMedia.site === 'Twitter') {
        const hrefValue = `https://twitter.com/${socialMedia.handle}`
        return <a href={hrefValue}><i className='fab fa-twitter-square'/></a>
      }
      else if (socialMedia.site === 'Facebook') {
        const hrefValue = `https://facebook.com/${socialMedia.handle}`
        return <a href={hrefValue}><i className='fab fa-facebook-square'/></a>
      }
      else if (socialMedia.site === 'YouTube') {
        const hrefValue = `https://youtube.com/${socialMedia.handle}`
        return <a href={hrefValue}><i className='fab fa-youtube-square'/></a>
      }
      else {
        console.log('Social media', socialMedia.name, 'not recognized')
      }
    })
  }

  return (
    <figure className='card'>
      <div className='image'>
        <img src={person.photoUrl} alt={person.name} />
      </div>
      <figcaption className='caption'>
        <div className='name'>{person.name}</div>
        <div className='office'>{person.office}</div>
        <div className='party'>{person.party}</div>
        <div className='email'>{person.email}</div>
        <div className='phone'>{person.phone}</div>
        <div className='address'>
          <div className='address-name'>{address.name}</div>
          <div className='address-street'>{address.street}</div>
          <div className='address-city-state-zip'>{cityStateZip}</div>
        </div>
        <div className='social-media'>
          { buildSocialMedia(socialMedia) }
        </div>
      </figcaption>
    </figure>
  )
}
