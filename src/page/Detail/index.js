import React, { Component } from 'react';
import sty from './style/detail.less'
class Detail extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={sty.cssModule}>less模块化配置</div>
        </header>
      </div>
    );
  }
}

export default Detail;
