import React from 'react'
import { connect } from 'react-redux'
import selectors from '../store/selectors'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import './app.scss'

const app = ({ address }) => {
  // sample of how to use the API
  console.log('am i here?')
  fetch('/api/politifact/statementlist/?fname=donald&lname=trump')
    .then(response => response.json())
    // .then(x => console.log('potato', x))

  return <div className='app'>
    <div className='page'>
      <div className={address ? 'title top' : 'title'}>Find Your Representatives</div>
      <div className='address-search-wrapper'>
        <AddressSearchSection/>
      </div>
      <RepresentativesSection/>
    </div>
  </div>
}
const mapStateToProps = state => ({
  address: selectors.address.getAddress(state)
})

export default connect(mapStateToProps)(app)
