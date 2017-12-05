import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'



class Index extends Component{	  
	render(){
		return(
	
				<div>
				this is index
				</div>


			)
	}
	componentDidMount(){
		
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