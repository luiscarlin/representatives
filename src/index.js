import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'
import './index.scss'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProfilePageContainer from "./components/containers/ProfilePageContainer";
// import { unregister } from './registerServiceWorker';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={Store.initialize()}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/profile/:name' component={ProfilePageContainer} />
      </div>
    </Router>
  </Provider>,
  rootElement
)

// unregister()
