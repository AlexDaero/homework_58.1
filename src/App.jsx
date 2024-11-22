import React, { Component } from 'react';
import './App.css';
import WatchList from './containers/WatchList/Watchlist';
import WatchList_func from './containers/WatchList/Watchlist_func';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>На классах</h1>
        <WatchList />
        <h1>На функциях</h1>
        <WatchList_func />
      </div>
    )
  };
}

export default App;
