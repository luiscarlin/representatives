import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyC63iYNVwNtcZ5e_6-fr2X5kjlSANRPXXc'
const address = "2861 Mondavi Lane, Hilliiard, OH USA"

class App extends Component {

  constructor() {
    super()
    this.state = {
      output:  {}
    }
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);

        var electionId = 2000;

        var req = window.gapi.client.request({
            'path' : '/civicinfo/v2/voterinfo',
            'params' : {'electionId' : electionId, 'address' : address}
        });
       req.execute((results) => {
         console.log('results', results)
         this.setState = {
           output: results
         }
       })
      })
    }
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadYoutubeApi();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {JSON.stringify(this.state.output)}
        </p>
      </div>
    );
  }
}


export default App;