import React from 'react'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import './app.scss'

export default () => (
  <div className='app'>
    <div className='page'>
      <div className='address-search-wrapper'>
        <AddressSearchSection/>
      </div>
      <RepresentativesSection/>
    </div>
  </div>
)
