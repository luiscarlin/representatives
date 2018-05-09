import React from 'react'
import SearchBox from '../../../lib/SearchBox'

export default class AddressSearch extends React.Component {
  render() {
    return (
      <SearchBox placeholder='Enter your address' onButtonClick={this.props.onSearchClick}/>
    )
  }
}
