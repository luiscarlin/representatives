import React from 'react'
import './card.scss'
import SocialMediaIconContainer from '../social-media-icon-container'
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
        <a href={person.website || undefined} target='_blank'>
          <Img src={[person.photoUrl, capitolSvg]} loader={<img src={capitolSvg} alt={person.name}/>}/>
        </a>
      </figure>
      <figcaption className='caption'>
        <div className='info-container'>
          <div className='name'>{person.name}</div>
          <div className='office'>{person.office}</div>
          <div className='party'>{person.party}</div>
          { person.email && styledEmail }
          { person.phone && styledPhone }
          { person.address && buildAddress() }
        </div>
        <SocialMediaIconContainer socialMedia={person.socialMedia} />
      </figcaption>
    </div>
  )
}
