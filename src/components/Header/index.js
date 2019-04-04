import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col,Menu, Icon,Tabs,message,Form,Input,Button,CheckBox} from 'antd';
import logoUrl from '../../static/images/news.png';
import sty from './style/index.less'
import Login from '../Login'
const FormItem =Form.Item

class Header extends Component {
  constructor(){
    super()
    this.state = {
      current:'top',
      show:false,
      action:'login',
      isLogin:false,
      userName:'',
      userId:0
    }
  }
  render() {
    let {getFieldProps} = this.props.form;

    const loginMenu = <Menu.Item key="logout" className="register">
      <Button type="primary" htmlType="button">{this.state.userName}</Button>
      &nbsp;&nbsp;
      <Link target="_blank">
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type="ghost" htmlType="button">退出</Button>
    </Menu.Item>

    const outMenu = <Menu.Item key="register" className="register">
      <Icon type="appstore"></Icon>注册/登录
    </Menu.Item>

    const userShow = this.state.isLogin?loginMenu:outMenu;
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className={sty.logo}>
              <img src={logoUrl} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore"/>头条
              </Menu.Item>
              <Menu.Item key="shehui"> 
                <Icon type="appstore"/>社会
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"/>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"/>国际
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore"/>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore"/>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore"/>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore"/>时尚
              </Menu.Item>
            </Menu>
            {/* {this.state.isLogin?loginMenu:outMenu} */}
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
 
}

export default Header=Form.create({})(Header);
