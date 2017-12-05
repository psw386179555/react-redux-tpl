import React from 'react'
import { Table } from 'antd';

import Toolbar from './toolbar.js'

const columns = [{
  title: '订单号',
  dataIndex: 'name',
  width: 150,
}, {
  title: '报修人',
  dataIndex: 'age',
  width: 150,
}, {
  title: '联系方式',
  dataIndex: 'address',
},{
  title: '操作',
  dataIndex: 'tool',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    tool:<Toolbar/>
  });
}

class Tab1 extends React.Component{
  render() {
    return (
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y:"65vh" }} />
    );
  }
}

export default Tab1

