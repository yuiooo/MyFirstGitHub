import React from 'react';
import styles from './Main.less';
import {
	Table,
	Avatar,
	Button
} from 'antd';
import {
	Link
} from 'dva/router';

class Main extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const dataSource = [{
			id: '1',
			tuiName: 'ray',
			category: '巴拉巴拉',
			realname: '林',
			phone: '12345678901',
			times: '2017-07-12 16:32:03'
		}];

		const columns = [{
			title: '名称',
			dataIndex: 'tuiName',
		},{
			title: '所属分类',
			dataIndex: 'category',
		},{
			title: '姓名',
			dataIndex: 'realname'
		},{
			title: '手机号',
			dataIndex: 'phone'
		}, {
			title: '登记时间',
			dataIndex: 'times'
		}];
		return (
			<div className='content-main flex-1'>
	      		<Table rowKey='id' dataSource = {dataSource} columns = {columns}></Table>
	   		</div>
		);
	}
}

export default Main;