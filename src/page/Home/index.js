import React, { Component } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import sty from './style/index.less'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header/> 
        <Footer/> 
      </div>
    );
  }
}

export default Home;
