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
			pic: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			title: 'ray',
			content: '巴拉巴拉',
			times: '2017-07-12 16:32:03'
		}];

		const columns = [{
			title: '分类名称',
			dataIndex: 'id',
		}, {
			title: '图片',
			dataIndex: 'pic',
			render: (text,record)=>(
					<img src={text} />
				)
		}, {
			title: '标题',
			dataIndex: 'title',
		}, {
			title: '文字',
			dataIndex: 'content'
		}, {
			title: '添加时间',
			dataIndex: 'times'
		}, {
			title: '操作',
			key: 'options',
			render: (text,record)=>(
					<Button>删除</Button>
				)
		}];
		return (
			<div className='content-main flex-1'>
	      		<Table rowKey='id' dataSource = {dataSource} columns = {columns}></Table>
	   		</div>
		);
	}
}

export default Main;