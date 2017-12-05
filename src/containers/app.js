/*
* @Author: Administrator
* @Date:   2017-12-05 10:05:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-05 17:27:24
*/
import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../fetch/user/user'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

import { getLocalStorage } from '../utils/localStorage.js'

 
class App extends React.Component{	
	render(){
		return (
				
				<div>
					{this.props.children}
				</div>
			
			)
	}

	componentDidMount(){
		let token = getLocalStorage('token')
		if(!token){
			this.props.history.push("/user/login")
		}else{
			let result = login(token)
		        result.then(response=>{
		        	if (response.ok) {
				    	return response.json();
				  	}
				 	return response.text();	
		        }).then(json=>{
		        	if(json.state === 200){
		        		this.props.userinfoActions.login(json.data)
		        		
		        	}		        	
		        })
		}
	}

} 
App.contextTypes = {
    router: PropTypes.object
}

function mapToPropsState(state){
	return {
		userinfo:state.userinfo
	}
}
function mapDispatchToProps(dispatch) {
    return {
    	userinfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default withRouter(connect(
	mapToPropsState
	,mapDispatchToProps
	)(App));