import React, { Component } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Container">
          <h1 className="title">Startup Branch</h1>
          <h3 className="subtitle">A liberdade de escolher o melhor</h3>
        </div>
      </div>
    );
  }
}

export default Home;
