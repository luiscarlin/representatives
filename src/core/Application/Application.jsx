import React from 'react'
import { Provider } from 'react-redux'
import './Application.css'
import configureStore from '../../init/configureStore'

import { AddressSearch } from '../../modules/AddressSearch'

const store = configureStore()

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddressSearch />
        </div>
      </Provider>
    )
  }
}

export default Application
