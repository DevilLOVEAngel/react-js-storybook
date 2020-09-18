import './App.css';

import { InboxScreen } from './screens/InboxScreen';
import { Provider } from 'react-redux';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
