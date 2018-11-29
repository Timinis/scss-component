import React, { Component } from 'react';
import './App.css';
import Header from './component/header.js';
import Footer from './component/footer.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <h1>Heyo</h1>
        </Header>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
