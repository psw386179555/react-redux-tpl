/*
* @Author: Administrator
* @Date:   2017-12-05 11:26:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-06 14:52:44
*/
import React, { Component } from 'react'
import { Link,withRouter} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import PropTypes from 'prop-types';
import { Layout, Menu, Icon ,Avatar,Spin } from 'antd';
import './frame.css'
import { deleteLocalStorage } from '../../utils/localStorage.js'
import MyNoticeIcon from './noticeIcon.js'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




function chooseKey(path){
	switch(path){		
		case "/dashboard":
			return ['1']
		case "/":
			return ['1']
		case "/member/student":
			return ['2']
		case "/member/worker":
			return ['3']	
		case "/repair":
			return ['4']
		default:
		  	return ['1']
	}
}


class Frame extends Component{	
	state = {
    	collapsed: false    	
	};

	toggle = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	};	
	logout(){
		deleteLocalStorage('token')
		this.props.history.push('/user/login')
	 };
	 componentWillReceiveProps(){
		console.log("*******componentWillReceiveProps**********")
		let that = this
		this.setState({
			loading:true
		})
		setTimeout(function(){
			that.setState({
				loading:false
			})
		},1000)	
	 }
	componentDidMount(){
			
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
			      <Menu theme="dark" mode="inline" defaultSelectedKeys={chooseKey(this.props.history.location.pathname)}>
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
		              <Menu.Item key="2">
		              <Link to="/member/student">
			            <span className="nav-text">学生用户</span>
			          </Link>
			          </Menu.Item>
		              <Menu.Item key="3">
		              <Link to='/member/worker'>
			            <span className="nav-text">维修用户</span>
			          </Link>
			          </Menu.Item>		              
		            </SubMenu>
			        <Menu.Item key="4">
			        	<Link to='/repair'>
			          <Icon type="tool" />
			          <span className="nav-text">维修管理</span>
			          </Link>
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
							<MyNoticeIcon/>
						</span>
						
						  <span className="section user" >
						  <Avatar src={this.props.userinfo?this.props.userinfo.headimg:null}/>
						 		{this.props.userinfo?this.props.userinfo.username:null}
						  </span>
						   <span className="section user" onClick={this.logout.bind(this)}>
						 	 <Icon type="logout" />退出登录
						  </span>
						
					</div>						
			      </Header>
			      <Content style={{ margin: '10px 16px 0'}}>			       
			        <div style={{ padding: 20, background: '#fff', minHeight: "65vh",borderRadius:"10px"}}>
			          
						{
							this.state.loading?<div className="spinBox"><Spin/></div>:this.props.children
						}	
			     
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

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    	userinfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

Frame.propTypes = {
    userinfo: PropTypes.object 
}

export default withRouter(connect(
	mapStateToProps
	,mapDispatchToProps
	)(Frame))