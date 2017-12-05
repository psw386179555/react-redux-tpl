import React,{ Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import App from '../containers/app'
import Index from '../containers/Index/index'
import Login from '../containers/User/login'
import Student from '../containers/Member/student'
import Worker from '../containers/Member/worker'
import Repair from '../containers/Repair/repair'
import Pages404 from '../containers/Error/pages404'

import Frame from '../components/common/frame.js'

export default class RouteMap extends Component{
	render(){
		return (				
				<Router>
					<App>
					<Switch>
						<Route exact path="/user/login" component={Login}/>						
						<Route exact path='/404' component={Pages404} />						
						<Frame>
							<Route exact path="/" component={Index}/>
							<Route exact path="/dashboard" component={Index}/>
							<Route exact path="/member/student" component={Student}/>
							<Route exact path="/member/worker" component={Worker}/>
							<Route exact path="/repair" component={Repair}/>
						</Frame>
						<Redirect exact from='*' to='/404' />						
					</Switch>
					</App>
				</Router>				
			)
	}
}