/*
* @Author: Administrator
* @Date:   2017-12-05 11:11:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-05 17:58:51
*/
import React from 'react'
import { connect } from 'react-redux'
import{ withRouter} from 'react-router-dom'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, Checkbox,Modal} from 'antd';

import PropTypes from 'prop-types'

import './login.css'

import { setLocalStorage ,getLocalStorage} from '../../utils/localStorage'

import { login } from '../../fetch/user/user'

const FormItem = Form.Item


function error() {
  Modal.error({
    title: '登录异常！',
    content: (
      <div>
        <p>请稍后，重新登录</p>        
      </div>
    ),
    onOk() {},
  });
}

class Login extends React.Component{


	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    	 if (!err) {
		        let result = login(values)
		        result.then(response=>{
		        	if (response.ok) {
				    	return response.json();
				  	}
				 	return response.text();	
		        }).then(json=>{
		        	console.log(json)
		        	if(json.state === 200){
		        		setLocalStorage('token',json.token)
		        		this.props.history.push('/dashboard')
		        		this.props.userinfoActions.login(json.data)
		        	}		        	
		        }).catch(err=>{
		        	console.log(err)
		        	error()
		        })
				
		      } 
	    });	 
	};

	componentWillMount(){
		let token = getLocalStorage('token')
		if(token){
			this.props.history.push("/")
		}
	}


	render() {
    	const { getFieldDecorator } = this.props.form
	    return (
	    	<div className="login-box">	    
	    		<Form onSubmit={this.handleSubmit} className="login-form">
	    		 	<FormItem>	      
			           	<p className="login-title">管理员登录</p>
					</FormItem>
			        <FormItem>
			          {getFieldDecorator('username', {
			            rules: [{ required: true, message: 'Please input your username!' }],
			          })(		          
			            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
					)}
			        </FormItem>
			        <FormItem>
			         {getFieldDecorator('password', {
			            rules: [{ required: true, message: 'Please input your password!' }],
			          })(        
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			        )}
			         </FormItem>
			        <FormItem>
			        <Checkbox defaultChecked={true}>Remember me</Checkbox>
			                
			        </FormItem>
			        <FormItem>
			        <Button type="primary" htmlType="submit" className="login-form-button">
			            登  录
			        </Button>
			        </FormItem>
			      </Form>
	    	</div>	      
	    );
	  }
}

function mapStateToProps(state){
	return {
		userinfo:state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
    return {
    	userinfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}


Login.contextTypes = {
    router: PropTypes.object
}
export default withRouter(connect(
	mapStateToProps
	,mapDispatchToProps
	)( Form.create()(Login)));