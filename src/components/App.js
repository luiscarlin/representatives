import React from 'react'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import Card from './presenters/generic/card'

export default () => (
  <div>
    <AddressSearchSection />
    <RepresentativesSection />
    <Card photoUrl='http://www.fillmurray.com/g/200/300'/>
  </div>
)
