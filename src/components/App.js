import React from 'react'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import Card from './presenters/generic/card'

export default () => (
  <div>
    <AddressSearchSection />
    <RepresentativesSection />
    <Card photoUrl='http://www.fillmurray.com/g/200/300' name='Pedro P Pedrozo' email='pedro@pedro.com' phone='(777) 777-1111' address='123 Main St. Columbus, OH 43434' />
  </div>
)
