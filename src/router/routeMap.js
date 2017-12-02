import React,{ Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Index from '../containers/Index/index'

export default class RouteMap extends Component{
	render(){
		return (
				<div>
				<Router>
					<Switch>
						<Route exact path="/" component={Index}/>
					</Switch>
				</Router>
				</div>
			)
	}
}