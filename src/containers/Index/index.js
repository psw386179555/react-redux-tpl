import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { Bar ,  Pie, yuan } from 'ant-design-pro/lib/Charts';


import './index.css'
const visitData = [
  {
    x: '2017-09-01',
    y: 50,
  },
  {
    x: '2017-09-02',
    y: 120,
  },
  {
    x: '2017-09-03',
    y: 88,
  },
  {
    x: '2017-09-04',
    y: 65,
  },{
    x: '2017-09-05',
    y: 11,
  },{
    x: '2017-09-06',
    y: 18,
  },{
    x: '2017-09-07',
    y: 120,
  },{
    x: '2017-09-08',
    y: 160,
  },
];


const salesPieData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
]

class Index extends Component{	  
	render(){
		return(
	
				<div className="chartBoxAll">
				<div className="chartBox chart1">
					<Bar 
					 height={200}				  
				    data={visitData}
				    title="维修订单数"
				  >
				  </Bar>
				</div>

				<div className="chartBox chart2">					
					<Pie
				    hasLegend
				    title="销售额"
				    subTitle="销售额"
				    total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
				    data={salesPieData}
				    valueFormat={val => yuan(val)}
				    height={200}
				  />
				</div>
				
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