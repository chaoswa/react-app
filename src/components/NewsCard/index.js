import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card} from 'antd';
import sty from './style/index.less'
import {getNews} from '../../api/news'

class NewsCard extends Component {
  constructor(){
    super()
    this.state = {
      news:''
    }
  }
  componentWillMount(){
    getNews(this.props.type,this.props.count).then(res=>{
      console.log(res)
      this.setState({news:res})
    })
  }
  render() {
    const {news} = this.state
    const newsList = news.length?news.map((newsItem,index)=>(
      <li key={index} className={sty.list}>
        <Link to={`detail/${newsItem.uniquekey}`} target="_blank">{newsItem.title}</Link>
      </li>
    )):'没有加载到任何新闻'
  
    return (
      <Card bordered={this.props.bordered} bodyStyle={{padding:0}}>
        <ul>{newsList}</ul>
      </Card>
    )
  }
 
}

export default NewsCard;
