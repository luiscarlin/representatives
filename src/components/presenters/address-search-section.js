import React from 'react'
import SearchBox from './generic/search-box'

export default ({ onSearchClick }) =>  (
  <SearchBox placeholder='Search with your address...' onButtonClick={onSearchClick}/>
)
