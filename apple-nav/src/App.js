import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavLinks from './NavBars/NavLinks';
import MacIcons from './NavBars/MacIcons';
import iPadIcons from './NavBars/iPadIcons';
import iPhoneIcons from './NavBars/iPhoneIcons';
import WatchIcons from './NavBars/WatchIcons';
import TVIcons from './NavBars/TVIcons'
import MusicIcons from './NavBars/MusicIcons';
import SupportIcons from './NavBars/SupportIcons';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavLinks} />
      <Route exact path='/mac' component={MacIcons} />
      <Route exact path='/ipad' component={iPadIcons} />
      <Route exact path='/iphone' component={iPhoneIcons} />
      <Route exact path='/watch' component={WatchIcons} />
      <Route exact path='/tv' component={TVIcons} />
      <Route exact path='/music' component={MusicIcons} />
      <Route exact path='/support' component={SupportIcons} />
    </div>
  );
}

export default App;
