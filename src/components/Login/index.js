import React, { Component } from 'react';
import { Menu, Icon,Tabs,message,Form,Input,Button,CheckBox} from 'antd';
import { Link } from 'react-router-dom'
import sty from './style/index.less'

class Login extends Component {
  constructor(){
    super()
    this.state = {
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
      userShow
    )
  }
 
}

export default Form.create({})(Login);
