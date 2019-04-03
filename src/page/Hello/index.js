import React, { Component } from 'react';
import Header from '../../components/Header'
import {Link}from 'react-router-dom';

class Hello extends Component {
  render() {
    let arr = ['aa','bb','cc']
    return (
      <div className="App">
        <header className="App-header">
          <Header title="hello页面"/>  
          <p style={{fontSize:'30px'}} onClick={this.clickHandler.bind(this)}>123</p>
          <Link to='/detail'>detail</Link>
          <ul>
            {arr.map((item,index)=>{
              return (<li key={index}>{item}</li>)
            })}
          </ul>
        </header>
      </div>
    );
  }
  clickHandler(){
    console.log(this)
  }
}

export default Hello;
