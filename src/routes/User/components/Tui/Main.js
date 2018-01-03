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
			url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			qrcode: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			times: '2017-07-12 16:32:03'
		}];

		const columns = [{
			title: '名称',
			dataIndex: 'tuiName',
		},{
			title: '所属分类',
			dataIndex: 'category',
		}, {
			title: 'url地址',
			dataIndex: 'url',
			render: (text,record)=>(
					<a>点击复制</a>
				)
		},{
			title: '二维码',
			dataIndex: 'qrcode',
			render: (text,record)=>(
					<a>点击下载</a>
				)
		}, {
			title: '添加时间',
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