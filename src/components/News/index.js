import React, { Component } from 'react';
import { Row, Col,Tabs,Carousel} from 'antd';
import sty from './style/index.less'
import NewsCard from '../NewsCard'
import NewsImg from '../NewsImg'
const TabPane = Tabs.TabPane

class News extends Component {
  constructor(){
    super()
    this.state = {
      imgList:[
        require('../../static/images/img01.jpg'),
        require('../../static/images/img02.jpg'),
        require('../../static/images/img03.jpg')
      ]
    }
  }
  render() {
    const settings = {
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    }
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className={sty.container}>
            <div className={sty.leftContainter}>
              <div className={sty.carousel}>
                <Carousel {...settings}>
                  <div><img src={this.state.imgList[0]}/></div>
                  <div><img src={this.state.imgList[1]}/></div>
                  <div><img src={this.state.imgList[2]}/></div>
                </Carousel>
              </div>
              <NewsImg count={6} type="guoji" width="400px" cardTitle="国际头条" imgWidth="118px"/>
            </div>
            <Tabs className={sty.tabsNews}>
              <TabPane tab="头条新闻" key="1">
                <NewsCard count={22} type="top" width="100%" bordered={false}/>
              </TabPane>
              <TabPane tab="国际" key="2">
                <NewsCard count={22} type="guoji" width="100%" bordered={false}/>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <NewsImg count={10} type="guonei" width="100%" cardTitle="国内新闻" imgWidth="160px"/>
            <NewsImg count={20} type="yule" width="100%" cardTitle="娱乐新闻" imgWidth="160px"/>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
 
}

export default News;
