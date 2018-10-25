import React from 'react'
import Autocomplete from 'react-google-autocomplete';
import './address-search-section.scss'

export default ({ onSearchClick }) =>  (
  <Autocomplete
    className={'search-box'}
    onPlaceSelected={(place) => onSearchClick(place.formatted_address) }
    types={['geocode']}
    componentRestrictions={{country: "us"}}
    placeholder={'Search with your address...'}
    autoFocus={true}
  />
)
