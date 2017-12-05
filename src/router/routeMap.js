import React,{ Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import App from '../containers/app'
import Index from '../containers/Index/index'
import Login from '../containers/User/login'
import Pages404 from '../containers/Error/pages404'

export default class RouteMap extends Component{
	render(){
		return (				
				<Router>
					<App>
					<Switch>
						<Route exact path="/" component={Index}/>
						<Route exact path="/dashboard" component={Index}/>
						<Route exact path="/user/login" component={Login}/>
						<Route exact path='/404' component={Pages404} />
						<Redirect exact from='*' to='/404' />
					</Switch>
					</App>
				</Router>				
			)
	}
}