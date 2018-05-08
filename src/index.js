import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Application from './core/Application'
import registerServiceWorker from './init/registerServiceWorker'

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
