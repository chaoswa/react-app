import React, { Component } from 'react';
import { Row, Col} from 'antd';
import sty from './style/index.less'

class Footer extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className={sty.footer}>
            &copy;&nbsp;2019 ReactNews. All Rights Reserved
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
 
}

export default Footer;
