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
    const inputChanged = (event) => {
      if (event.key === 'Enter') {
        this.props.onButtonClick(this.state.searchTerm)
        return
      }

      this.setState({ searchTerm: event.target.value })
    }

    return (
      <div className='search-box'>
        <input className='input-box' type='text'
          placeholder={this.props.placeholder}
          onChange={(event) => inputChanged(event)}
        />
        <button className='search-button' onClick={() => this.props.onButtonClick(this.state.searchTerm)}>
          <i className='fa fa-search'></i>
        </button>
      </div>
    )
  }
}
