import React from 'react'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div>
        <input type='text'
          placeholder={this.props.placeholder}
          onChange={(event) => this.setState({ searchTerm: event.target.value })} 
        />
        <button onClick={() => this.props.onButtonClick(this.state.searchTerm)}>
          Search
        </button>
      </div>
    )
  }
}
