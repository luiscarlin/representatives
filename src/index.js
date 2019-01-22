import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'
import './index.scss'
import App from './components/App'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={Store.initialize()}>
    <App />
  </Provider>,
  rootElement
)

navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (let registration of registrations) {
   registration.unregister()
 }}
)
console.log('version: 19.01')