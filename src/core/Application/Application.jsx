import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../init/configureStore'
import { AddressSearchConnector } from '../../modules/AddressSearch'
import './Application.css'

const store = configureStore()

class Application extends React.Component {
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

export default Application
