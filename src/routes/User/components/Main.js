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
			nickname: 'ray',
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
			tuikefenleishu: 3,
			tuikeshu: 3,
			fangwenliang: 3,
			dengjiliang: 3,
			status: '正常',
			reg: {
				reg: '2017-07-12',
				login: '2017-07-12'
			}
		}];

		const columns = [{
			title: '用户ID',
			dataIndex: 'id',
		}, {
			title: '昵称',
			dataIndex: 'nickname',
		}, {
			title: '头像',
			dataIndex: 'avatar',
			render: (text,record)=>(
					<Avatar shape="square" src={text} />
				)
		}, {
			title: '标题',
			dataIndex: 'tuikefenleishu',
			render: (text,record)=>(
					<Link to={`/user/${record.id}/category`}>{text}</Link>
				)
		}, {
			title: '标题',
			dataIndex: 'tuikeshu',
			render: (text,record)=>(
					<Link to={`/user/${record.id}/tui`}>{text}</Link>
				)
		}, {
			title: '标题',
			dataIndex: 'fangwenliang',
			render: (text,record)=>(
					<Link to={`/user/${record.id}/visit`}>{text}</Link>
				)
		}, {
			title: '标题',
			dataIndex: 'dengjiliang',
			render: (text,record)=>(
					<Link to={`/user/${record.id}/register`}>{text}</Link>
				)
		}, {
			title: '状态',
			dataIndex: 'status',
		}, {
			title: '注册/最后登录时间',
			dataIndex: 'reg',
			render: (text,record)=>(
					<div>
						<div>{text.reg}</div>
						<div>{text.login}</div>
					</div>
				)
		}, {
			title: '操作',
			key: 'options',
			render: (text,record)=>(
					<Button>冻结</Button>
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