import React from 'react'
import './card.scss'
import capitolSvg from '../../../assets/capitol.svg'

export default ({ person }) => {
  const { address } = person
  const cityStateZip = `${address.city} ${address.state}, ${address.zip}`
  const socialMedia = person.socialMedia

  const buildSocialMedia = (socialMediaList) => {
    if (!socialMediaList) {
      return
    }
    return socialMediaList.map((socialMedia, index) => {
      if (socialMedia.site === 'GooglePlus') {
        const hrefValue = `https://plus.google.com/${socialMedia.handle}`
        return <a href={hrefValue} key={index}><i className='fab fa-google-plus-square' /></a>
      }
      else if (socialMedia.site === 'Twitter') {
        const hrefValue = `https://twitter.com/${socialMedia.handle}`
        return <a href={hrefValue} key={index}><i className='fab fa-twitter-square' /></a>
      }
      else if (socialMedia.site === 'Facebook') {
        const hrefValue = `https://facebook.com/${socialMedia.handle}`
        return <a href={hrefValue} key={index}><i className='fab fa-facebook-square' /></a>
      }
      else if (socialMedia.site === 'YouTube') {
        const hrefValue = `https://youtube.com/${socialMedia.handle}`
        return <a href={hrefValue} key={index}><i className='fab fa-youtube-square' /></a>
      }
      else {
        console.log('Social media', socialMedia.name, 'not recognized')
      }
    })
  }

  return (
    <figure className='card'>
      <div className='image'>
        <a href={person.website || undefined}>
          <img src={person.photoUrl || capitolSvg} alt={person.name} />
        </a>
      </div>
      <figcaption className='caption'>
        <div className='name'>{person.name}</div>
        <div className='office'>{person.office}</div>
        <div className='party'>{person.party}</div>
        <div className='email'>{person.email}</div>
        <div className='phone'>{person.phone}</div>
        <div className='address'>
          <div className='address-lines'>{person.address.lines.join(',')}</div>
          <div className='address-city-state-zip'>{cityStateZip}</div>
        </div>
        <div className='social-media'>
          {buildSocialMedia(socialMedia)}
        </div>
      </figcaption>
    </figure>
  )
}
