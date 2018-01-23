import React, { Component } from 'react';
import onion from './onion-logo.png';
import './App.css';
import FirstComponent from './Components/Component-1.js'
import NewsDesk from './weekend-update-desk.jpg'
import ScrapeButton from './Components/ScrapeButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={onion} className="App-logo pull-left" alt="logo" />
          <img src={onion} className="App-logo pull-right" alt="logo" />
          <h1 className="App-title">Let the Scraping Begin!</h1>
          <ScrapeButton />
        </header>
        
        {/*<img src={NewsDesk} className="background-image" alt="background" />*/}

        <p className="App-intro">
          Scraped Web Articles Below:
        </p>
        <div className="container">
          <div className="well">
            <FirstComponent test="Hello World!"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
