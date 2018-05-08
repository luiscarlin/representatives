import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../init/configureStore'

import './Application.css'
// import SearchBox from './presenters/SearchBox'

const store = configureStore()

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          hello
          {/*<SearchBox placeholder='Enter your Address' onButtonClick={console.log} />*/}
        </div>
      </Provider>
    )
  }
}

export default Application
