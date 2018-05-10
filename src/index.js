import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '.store/store'

import './index.css'
import App from './components/App'
import registerServiceWorker from './init/registerServiceWorker'

const rootElement = document.getElementById('root'))

ReactDOM.render(
  <Provider store={Store.initialize()}>
    <App />
  </Provider>,
  rootElement
)

registerServiceWorker();
