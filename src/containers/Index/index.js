import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Frame from '../../components/common/frame.js'
import { getAdData} from '../../fetch/home/home.js'

const img = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1822899106,40471411&fm=27&gp=0.jpg'


class Index extends Component{	  
	render(){
		return(
	
				<Frame
				notice={5}
			 	userinfo={
			 		{
			 		username:'sven666'
					,headimg:img
					}
				}>
				this is index
				</Frame>


			)
	}
	componentDidMount(){
		let userinfo ={
			username:'sven666'
		}
		this.props.userinfoActions.login(userinfo)

		let result = getAdData();

		result.then(response=> {
				if (response.ok) {
				    return response.json();
				  }
				  return response.text();		
			}).then(data=>{
				// console.log(data);
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