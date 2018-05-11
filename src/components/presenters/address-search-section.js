import React from 'react'
import SearchBox from './generic/search-box'

export default ({ onSearchClick }) =>  (
  <SearchBox placeholder='Enter your address' onButtonClick={onSearchClick}/>
)
