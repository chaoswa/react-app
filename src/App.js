import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    let arr = ['aa','bb','cc']
    return (
      <div className="App">
        <header className="App-header">
          <Header title="hello页面"/>  
          <p style={{fontSize:'30px'}} onClick={this.clickHandler.bind(this)}>123</p>
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

export default App;
