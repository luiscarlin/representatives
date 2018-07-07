import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'

import './index.scss'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={Store.initialize()}>
    <App />
  </Provider>,
  rootElement
)

registerServiceWorker()
