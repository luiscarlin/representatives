import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../init/configureStore'
import { AddressSearchConnector } from '../../modules/AddressSearch'
import './App.css'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <AddressSearchConnector />
        </div>
      </Provider>
    )
  }
}

export default App
