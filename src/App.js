import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchRepresentatives } from './services/fetchRepresentatives'

const API_KEY = 'AIzaSyC63iYNVwNtcZ5e_6-fr2X5kjlSANRPXXc'

class App extends Component {
  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);

        fetchRepresentatives().then(console.log)
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
      </div>
    );
  }
}


export default App;