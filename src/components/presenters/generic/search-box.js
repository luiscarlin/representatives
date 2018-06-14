import React from 'react'
import './search-box.scss'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className='search-box'>
        <input className='input-box' type='text'
          placeholder={this.props.placeholder}
          onChange={(event) => this.setState({ searchTerm: event.target.value })}
        />
        <button className='search-button' onClick={() => this.props.onButtonClick(this.state.searchTerm)}>
          <i className='fa fa-search'></i>
        </button>
      </div>
    )
  }
}
