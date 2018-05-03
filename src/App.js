import React from 'react'
import './App.css'
import SearchBox from './presenters/SearchBox'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <SearchBox onButtonClick={console.log}/>        
      </div>
    );
  }
}


export default App