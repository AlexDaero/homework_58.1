import React, { Component } from 'react';
import './App.css';
import WatchList from './containers/WatchList/Watchlist';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <WatchList />
      </div>
    )
  };
}

export default App;
