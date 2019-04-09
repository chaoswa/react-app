import React, { Component } from 'react';
import { Row, Col} from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsImg from '../../components/NewsImg'
import {getNewsDetail} from '../../api/news'
import sty from './style/detail.less'
class Detail extends Component {
  constructor(){
    super();
    this.state={
      newsItem:''
    }
  }
  componentDidMount(){
    let uniquekey = this.props.match.params.uniquekey;
    getNewsDetail(uniquekey).then(res=>{
      console.log(res)
      this.setState({newsItem:res})
      document.title=`${this.state.newsItem.title}——React News`
    })
  }
  createMark(){
    return {__html:this.state.newsItem.pagecontent}
  }
  render() {
    return (
      <div>
        <Header/>
        <Row className={sty.container}>
          <Col span={2}></Col>
          <Col span={14}>
            <div dangerouslySetInnerHTML={this.createMark()} className={sty.content}></div>
          </Col>
          <Col span={6}>
            <NewsImg count={40} type="top" width="100%" cardTitle="相关新闻" imgWidth="150px"/>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Footer/> 
      </div>
    );
  }
}

export default Detail;
