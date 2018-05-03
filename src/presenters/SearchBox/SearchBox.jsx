import React from 'react'

export default class SearchBox extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div>
        <input type='text' onChange={(event) => this.setState({ searchTerm: event.target.value })} />
        <button onClick={() => this.props.onButtonClick(this.state.searchTerm)}></button>
      </div>
    )
  }
}
