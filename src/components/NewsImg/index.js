import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card} from 'antd';
import sty from './style/index.less'
import {getNews} from '../../api/news'

class NewsImg extends Component {
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
    const styImg={
      display:'block',
      width:this.props.imgWidth,
      height:'90px'
    }
    const styh3={
      width:this.props.imgWidth,
      whiteSpace:"nowrap",
      overflow:'hidden',
      textOverflow:'ellipsis'
    }
    const cardSty={
      padding:0,
      width:this.props.width,
      display:'flex',
      flexFlow: 'row wrap',
    }
    const {news} = this.state
    const newsList = news.length?news.map((newsItem,index)=>(
      <div key={index} className={sty.imgCard}>
        <Link to={`detail/${newsItem.uniquekey}`} target="_blank">
          <div className={sty.img}>
            <img style={styImg} src={newsItem.thumbnail_pic_s}/>
          </div>
          <div className={sty.title}>
            <h3 style={styh3}>{newsItem.title}</h3>
            <p>{newsItem.author_name}</p>
          </div>
        </Link>
      </div>
    )):'没有加载到任何数据'
  
    return (
      <Card  title={this.props.cardTitle} bordered={true} bodyStyle={cardSty}>
        {newsList}
      </Card>
    )
  }
 
}

export default NewsImg;
