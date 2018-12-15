import React, { Component } from 'react';
import './App.css';
import './CreateProvider/CreateProvider.css';
import './ProviderList/ProviderList.css';
import CreateProvider from './CreateProvider/CreateProvider';
import ProviderList from './ProviderList/ProviderList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Provider Directory</h1>
      <p>v2.0</p>
        <div className = "content-wrapper">
          <div className= "CreateProvider-wrapper">
          <CreateProvider></CreateProvider>
          </div>
          <div className= "ProviderList-wrapper">
          <ProviderList></ProviderList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
