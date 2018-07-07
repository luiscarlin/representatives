import React from 'react'
import './search-box.scss'

const ENTER_KEY_CODE = 13

const getKeyCode = event => event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    const inputChanged = (event) => {
      if (getKeyCode(event) === ENTER_KEY_CODE) {
        this.props.onButtonClick(this.state.searchTerm)
        return
      }

      this.setState({ searchTerm: event.target.value })
    }

    return (
      <div className='search-box'>
        <input className='input-box' type='text'
          placeholder={this.props.placeholder}
          autoFocus={this.props.autoFocus}
          onKeyUp={(event) => inputChanged(event)}
        />
        <button className='search-button' onClick={() => this.props.onButtonClick(this.state.searchTerm)}>
          <i className='fa fa-search'></i>
        </button>
      </div>
    )
  }
}
