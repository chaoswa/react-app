import React, { Component } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import News from '../../components/News'
// import sty from './style/index.less'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <News/> 
        <Footer/> 
      </div>
    );
  }
}

export default Home;
