import React, { Component } from 'react';
import './App.css';
import Footerbar from './components/Footerbar/footerbar'
class App extends Component {
  render() {
    return (
      <div className="App">
          {
            this.props.children
          }
          <Footerbar></Footerbar>
      </div>
    );
  }
}

export default App;
