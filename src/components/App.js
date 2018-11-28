import React from 'react'
import { connect } from 'react-redux'
import selectors from '../store/selectors'
import AddressSearchSection from './containers/address-search-section-container'
import RepresentativesSection from './containers/representatives-section-container'
import './app.scss'
import axios from 'axios'

class app extends React.Component {
  componentWillMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.politifact.com/api/v/2/statementlist/?speaker__name_slug=nancy-pelosi&limit=50&format=json')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log('ERROR:', error))
  }

  render() {
    return (
      <div className='app'>
        <div className='page'>
          <div className={this.props.address ? 'title top' : 'title'}>Find Your Representatives</div>
          <div className='address-search-wrapper'>
            <AddressSearchSection/>
          </div>
          <RepresentativesSection/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  address: selectors.address.getAddress(state)
})

export default connect(mapStateToProps)(app)
