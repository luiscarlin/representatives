import React from 'react'
import SearchBox from './generic/search-box'
import Autocomplete from 'react-google-autocomplete';

import './address-search-section.scss'

export default class AddressSearchSection extends React.Component {
  // <SearchBox placeholder='Search with your address...' onButtonClick={onSearchClick} autoFocus/>
  // document.getElementById("potato").value = "My value"
  componentDidMount() {
    document.getElementById("potato").value = "Search with your address..."
  }

  render() {
    return <Autocomplete
      className='search-box'
      id='potato'
      onPlaceSelected={(place) => this.props.onSearchClick(place) }
      types={['geocode']}
      componentRestrictions={{country: "us"}}
      label={'hello'}
    />
  }
  
}
