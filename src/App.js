import React from 'react';
//import logo from './logo.svg';
import store from './store'
import './App.css';
import Routers from './Route'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
