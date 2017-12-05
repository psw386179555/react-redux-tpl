import React from 'react'
import { Tabs } from 'antd';

import Tab1 from './subPages/tab1.js'

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
class Repair extends React.Component{
	render() {
		return (
			 <Tabs defaultActiveKey="1" onChange={callback}>
		    <TabPane tab="正在维修中订单" key="1">
		    	<Tab1/>
		    </TabPane>
		    <TabPane tab="已完成订单" key="2">Content of Tab Pane 2</TabPane>
		    <TabPane tab="异常维修订单" key="3">Content of Tab Pane 3</TabPane>
		  </Tabs>
		);
	}
}
export default Repair
