import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { Layout, Menu,Breadcrumb, Icon ,Badge,Avatar,Dropdown} from 'antd';
import './App.css'
import { getAdData} from '../../fetch/home/home.js'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
	<div className="dropdownFrame">
		<Menu>
	    <Menu.Item key="10" disabled>
	      <a rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
	    </Menu.Item>
	    <Menu.Item key="20">
	      <a rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
	    </Menu.Item>
	    <Menu.Divider />
	    <Menu.Item key="30">3rd menu item</Menu.Item>
	  </Menu>
	</div>
  
);

class Index extends Component{
	  state = {
    	collapsed: false,
	  };
	  toggle = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	  }
	render(){
		return(

			<Layout className="layout">
			    <Sider
			      trigger={null}
          			collapsible
          			collapsed={this.state.collapsed}
			    >
			      <div className="logo" />
			      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			        <Menu.Item key="1">
			          <Icon type="user" />
			          <span className="nav-text">nav 1</span>
			        </Menu.Item>
			       <SubMenu
		              key="sub1"
		              title={<span><Icon type="desktop" /><span>User</span></span>}
		            >
		              <Menu.Item key="6">Tom</Menu.Item>
		              <Menu.Item key="7">Bill</Menu.Item>
		              <Menu.Item key="5">Alex</Menu.Item>
		            </SubMenu>
			        <Menu.Item key="3">
			          <Icon type="upload" />
			          <span className="nav-text">nav 3</span>
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
							 <Badge count={99} >
						      	<Icon type="bell" style={{ fontSize: 20}} />
						    </Badge>
						</span>
						<Dropdown overlay={menu}>
						  <span className="section user" >
						  <Avatar src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1822899106,40471411&fm=27&gp=0.jpg"/>
						  Admin
						  </span>
						</Dropdown>
					</div>						
			      </Header>
			      <Content style={{ margin: '10px 16px 0' }}>
			        <Breadcrumb style={{ margin: '10px 0' }}>
		              <Breadcrumb.Item>User</Breadcrumb.Item>
		              <Breadcrumb.Item>Bill</Breadcrumb.Item>
		            </Breadcrumb>
			        <div style={{ padding: 24, background: '#fff', minHeight: "70vh" }}>
			          content
			        </div>
			      </Content>
			      <Footer style={{ textAlign: 'center' }}>
			        Ant Design ©2016 Created by Ant UED
			      </Footer>
			    </Layout>
			  </Layout>


			)
	}
	componentDidMount(){
		let userinfo ={
			username:'sven666'
		}
		this.props.userinfoActions.update(userinfo)

		let result = getAdData();

		result.then(response=> {
				if (response.ok) {
				    return response.json();
				  }
				  return response.text();		
			}).then(data=>{
				console.log(data);
			}).catch(err=>{
				console.log(err);
			});
	}


}
// -------------------redux react 绑定--------------------

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

export default connect(
mapStateToProps
,mapDispatchToProps
)(Index)