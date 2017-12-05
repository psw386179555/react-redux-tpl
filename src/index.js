import React from 'react'
import ReactDOM from 'react-dom'
import RouteMap from './router/routeMap.js'
import { Provider } from 'react-redux'
import configStore from './store/configStore.js'
import registerServiceWorker from './registerServiceWorker'


const store = configStore()

ReactDOM.render(
	<Provider store={store}>
		<RouteMap/>
	</Provider>
,document.getElementById('root'));
registerServiceWorker();
