import React from 'react'
import './card.scss'
import capitolSvg from '../../../assets/capitol.svg'
import Img from 'react-image'

export default ({ person }) => {

  const buildAddress = () => {
    const { address } = person
    const cityStateZip = `${address.city} ${address.state}, ${address.zip}`

    return (
      <div className='address'>
        <div className='address-lines'>{person.address.lines.join(',')}</div>
        <div className='address-city-state-zip'>{cityStateZip}</div>
      </div>
    )
  }

  const buildSocialMedia = () => {
    const socialMediaList = person.socialMedia

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

  const styledEmail =
    <div className='email'>
      <a href={`mailto:${person.email}`}>{person.email}</a>
    </div>

  const styledPhone =
    <div className='phone'>
      <a href={`tel:+1${person.phone}`}>{person.phone}</a>
    </div>

  return (
    <div className='card'>
      <figure className='image'>
        <a href={person.website || undefined}>
          <Img src={[person.photoUrl, capitolSvg]} loader={<div className="image-loader">"Loading image"</div>}/>
        </a>
      </figure>
      <figcaption className='caption'>
        <div className='name'>{person.name}</div>
        <div className='office'>{person.office}</div>
        <div className='party'>{person.party}</div>
        { person.email && styledEmail }
        { person.phone && styledPhone }
        { person.address && buildAddress() }
        <div className='social-media'>
          {buildSocialMedia()}
        </div>
      </figcaption>
    </div>
  )
}
