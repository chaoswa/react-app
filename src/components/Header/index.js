import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col,Menu, Icon,Tabs,message,Form,Input,Modal,Button,CheckBox} from 'antd';
import logoUrl from '../../static/images/news.png';
import sty from './style/index.less'
import {userRegister} from '../../api/home'
const FormItem =Form.Item
const TabPane = Tabs.TabPane;

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
  componentWillMount(){
    let userName = localStorage.userName;
    if(userName!=''){
      this.setState({isLogin:true,userName:userName})
    }
  }
  setModalShow(value){
    this.setState({show:value})
  }
  handleClick(e){
    if(e.key==="register"){
      this.setState({current:"register"})
      this.setModalShow(true)
    }else{
      this.setState({current:e.key})
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        userRegister(this.state.action,values).then(res=>{
          console.log(res)
          if(this.state.action=="login"){
            this.setState({isLogin:true,userName:values.name})
            localStorage.userId=''
            localStorage.userName=values.name
          }
          this.props.form.resetFields();
          this.setModalShow(false)
        })
      }
    });
  }
  callBack(key){
    console.log(key)
    if(key==1){
      this.setState({action:'login'})
    }else if(key==2){
      this.setState({action:'register'})
    }
  }
  logout(){
    localStorage.userName=''
    this.setState({isLogin:false})
  }
  render() {
    let {getFieldDecorator} = this.props.form;

    const loginMenu = <Menu.Item key="logout" className={sty.register}>
      <Button type="primary" htmlType="button">{this.state.userName}</Button>
      &nbsp;&nbsp;
      <Link target="_blank" to="detail" className={sty.link}>
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
    </Menu.Item>

    const outMenu = <Menu.Item key="register" className={sty.register}>
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
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
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
              {userShow}
            </Menu>

            {/* 注册组件弹窗 */}
            <Modal title="用户中心" visible={this.state.show} 
              onCancel={()=>this.setModalShow(false)} 
              onOk={()=>this.setModalShow(false)}
              cancelText="取消" 
              okText="关闭">
              <Tabs type="card" onChange={this.callBack.bind(this)}>

                <TabPane tab="登录" key="1">
                  <Form  onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      {getFieldDecorator('name', {rules: [{ required: this.state.action=="login", message: '请输入账户' }]})
                      (<Input placeholder="请输入您的帐号"></Input>)}
                    </FormItem>  
                    <FormItem label="密码">
                      {getFieldDecorator('pass', {rules: [{ required: this.state.action=="login", message: '请输入您的密码' }]})
                      (<Input placeholder="请输入您的密码" type="password"></Input>)}
                    </FormItem>  
                    <Button type="primary" htmlType="submit">登录</Button>
                  </Form>
                </TabPane>

                <TabPane tab="注册" key="2">
                  <Form  onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      {getFieldDecorator('userName', {rules: [{ required: this.state.action=="register", message: '请输入账户' }]})
                      (<Input placeholder="请输入您的帐号"></Input>)}
                    </FormItem>  
                    <FormItem label="密码">
                      {getFieldDecorator('passWord', {rules: [{ required: this.state.action=="register", message: '请输入您的密码' }]})
                      (<Input placeholder="请输入您的密码" type="password"></Input>)}
                    </FormItem>  
                    <FormItem label="确认密码">
                      {getFieldDecorator('confirmPassWord', {rules: [{ required: this.state.action=="register", message: '请再次输入您的密码' }]})
                      (<Input placeholder="请再次输入您的密码" type="password"></Input>)}
                    </FormItem>  
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>

          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
 
}

export default Header=Form.create({})(Header);
