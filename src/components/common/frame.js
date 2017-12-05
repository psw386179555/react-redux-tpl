/*
* @Author: Administrator
* @Date:   2017-12-05 11:26:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-05 17:57:23
*/
import React, { Component } from 'react'
import { Link,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import { Layout, Menu,Breadcrumb, Icon ,Badge,Avatar,Dropdown} from 'antd';
import './frame.css'
import { deleteLocalStorage } from '../../utils/localStorage.js'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



const menu = (
	<div>
		<Menu>
	    <Menu.Item key="10" disabled>
	      <a rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
	    </Menu.Item>
	    <Menu.Item key="20">
	      <a rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
	    </Menu.Item>
	    <Menu.Divider />
	    <Menu.Item key="30"><span  onClick={this.logout}><Icon type="logout" />退出登录</span></Menu.Item>
	  </Menu>
	</div>
  
);

class Frame extends Component{
	state = {
    	collapsed: false
    	,userinfo:{}
		,notice:0
		,firstBreadcrumb:"总览"
		,secondBreadcrumb:""
	};
	toggle = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	  }

	logout = () =>{
		deleteLocalStorage('token')
		console.log("*********")
		this.props.router.push('/user/login')
	 }
	componentDidMount(){
		this.setState({
			userinfo:this.props.userinfo
			,notice:this.props.notice
		})
	}
	render(){
		return(

			<Layout className="layout">
			    <Sider
			      trigger={null}
          			collapsible={true}
          			collapsed={this.state.collapsed}
			    >
			      <div className="logo">Sven Barnett</div>
			      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			        <Menu.Item key="1">
			        	<Link to='/dashboard'>
			        	<Icon type="dashboard" />
			            <span className="nav-text">总览</span>
			          </Link>			         
			        </Menu.Item>
			       <SubMenu
		              key="sub1"
		              title={<span><Icon type="user" /><span>用户管理</span></span>}
		            >
		              <Menu.Item key="6">
		              <Link to="/dashboard">
			            <span className="nav-text">学生用户</span>
			          </Link>
			          </Menu.Item>
		              <Menu.Item key="7">
		              <Link to='/dashboard'>
			            <span className="nav-text">维修用户</span>
			          </Link>
			          </Menu.Item>		              
		            </SubMenu>
			        <Menu.Item key="3">
			          <Icon type="tool" />
			          <span className="nav-text">维修管理</span>
			        </Menu.Item>
			        <Menu.Item key="4">
			          <Icon type="user" />
			          <span className="nav-text">nav 4</span>
			        </Menu.Item>
			      </Menu>
			    </Sider>
			    <Layout>
			      <Header style={{ background: '#fff', padding:0}}>
			      	<span className="section">
			      		<Icon
		              className="trigger"
		              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
		              onClick={this.toggle}
		              style={{ fontSize: 20,padding:20,fontWeight:'bold'}}
		            />
			      	</span>
			        
					<div className="right">
						<span className="section notice">
							 <Badge count={this.state.notice} >
						      	<Icon type="bell" style={{ fontSize: 20}} />
						    </Badge>
						</span>
						<Dropdown overlay={menu} placement="bottomLeft" trigger={['hover']}>
						  <span className="section user" >
						  <Avatar src={this.state.userinfo?this.state.userinfo.headimg:null}/>
						 		{this.state.userinfo?this.state.userinfo.username:null}
						  </span>
						</Dropdown>
					</div>						
			      </Header>
			      <Content style={{ margin: '10px 16px 0' }}>
			        <Breadcrumb style={{ margin: '10px 0' }}>
		              <Breadcrumb.Item>{this.state.firstBreadcrumb}</Breadcrumb.Item>
		              <Breadcrumb.Item>{this.state.secondBreadcrumb}</Breadcrumb.Item>
		            </Breadcrumb>
			        <div style={{ padding: 24, background: '#fff', minHeight: "70vh" }}>
			          {this.props.children}
			        </div>
			      </Content>
			      <Footer style={{ textAlign: 'center' }}>
			        Ant Design ©2016 Created by Ant UED
			      </Footer>
			    </Layout>
			  </Layout>


			)
	}
}
Frame.propTypes = {
    userinfo: PropTypes.object,
    notice: PropTypes.number
}
Frame.contextTypes = {
    router: PropTypes.object,   
}
export default withRouter(Frame)