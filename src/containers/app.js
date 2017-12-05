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

import { getLocalStorage } from '../utils/localStorage'

 
class App extends React.Component{	
	render(){
		return (
				
				<div>
					{this.props.children}
				</div>
			
			)
	}
	// componentWillReceiveProps(){
	// 	console.log("******componentWillReceiveProps*******")
	// }
	componentWillUpdate(){
		let token = getLocalStorage('token')
		if(!token){
			this.props.history.push("/user/login")
		}
	}
	// componentDidUpdate(){
	// 	console.log("******componentDidUpdate*******")
	// }
	// shouldComponentUpdate(){
	// 	// let checkLogin = getLocalStorage('token')
	// 	// if(!checkLogin){
	// 	// 	this.props.history.push("/user/login")
	// 	// }
	// 	console.log("******shouldComponentUpdate*******")
	// 	return true	
		
	// }
} 
App.contextTypes = {
    router: PropTypes.object
}

function mapToPropsState(state){
	return {
		userinfo:state.userinfo
	}
}
export default withRouter(connect(
	mapToPropsState
	)(App));