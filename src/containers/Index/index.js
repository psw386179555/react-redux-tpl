import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import logo from './logo.svg'
import './App.css'
import { getAdData} from '../../fetch/home/home.js'

class Index extends Component{

	render(){
		return(

			<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Welcome to React {this.props.userinfo.username}</h1>
	        </header>
	        <p className="App-intro">
	          To get started, edit <code>src/App.js</code> and save to reload.
	        </p>
	        	        
	      </div>


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