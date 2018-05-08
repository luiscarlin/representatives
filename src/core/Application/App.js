import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './App.css'
import SearchBox from './presenters/SearchBox'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SearchBox placeholder='Enter your Address' onButtonClick={console.log} />
        </div>
      </Provider>
    )
  }
}


export default App