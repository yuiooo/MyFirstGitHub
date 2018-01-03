import React from 'react';
import styles from './Main.less';
import {
	Table,
	Avatar,
	Button,
	Radio
} from 'antd';
import {
	Link
} from 'dva/router';
import cx from 'classnames/bind';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

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
			date: '2017-07-05',
			newvisit: 2000,
			newreg: 5000,
			visittotal: 6000,
			regtotal: 9000,
		},{
			id: '2',
			date: '2017-07-06',
			newvisit: 2000,
			newreg: 5000,
			visittotal: 6000,
			regtotal: 9000,
		},{
			id: '3',
			date: '2017-07-07',
			newvisit: 2000,
			newreg: 5000,
			visittotal: 6000,
			regtotal: 9000,
		},{
			id: '4',
			date: '2017-07-08',
			newvisit: 2000,
			newreg: 5000,
			visittotal: 6000,
			regtotal: 9000,
		},{
			id: '5',
			date: '2017-07-09',
			newvisit: 2000,
			newreg: 5000,
			visittotal: 6000,
			regtotal: 9000,
		}];

		const columns = [{
			title: ' ',
			dataIndex: 'date',
		},{
			title: '每日新增访问',
			dataIndex: 'newvisit',
		}, {
			title: '每日新增登记',
			dataIndex: 'newreg'
		},{
			title: '访问总数',
			dataIndex: 'visittotal'
		},{
			title: '登记总数',
			dataIndex: 'regtotal'
		}];
		const dataStyle = [
		  {
		    name: 'newvisit',
		    color: '#2EC7C8',
		    type: 'line',
		    value: '每日新增访问',
		    unit: '1'
		  },
		  {
		    name: 'newreg',
		    color: '#BBA9E0',
		    type: 'line',
		    value: '每日新增登记',
		    unit: '1'
		  },
		  {
		    name: 'visittotal',
		    color: '#3DA4ED',
		    type: 'line',
		    value: '访问总数',
		    unit: '1'
		  },
		  {
		    name: 'regtotal',
		    color: '#FFB67A',
		    type: 'line',
		    value: '登记总数',
		    unit: '1'
		  },
		]
		const cxs = cx.bind(styles);
		return (
			<div className='content-main flex-1' style={{backgroundColor: '#F7F7F7'}}>
	      		<Table style={{backgroundColor: '#fff'}} rowKey='id' pagination={false} dataSource = {dataSource} columns = {columns}></Table>

	      		<div>
					<div className={cxs(['line-chart-title','flex-box','flex-center-center'])}>
						<div className="">
							访问登记趋势分析
						</div>
						<Radio.Group className={styles['line-chart-radio']} value='7' onChange={''}>
				          <Radio.Button value="1">今天</Radio.Button>
				          <Radio.Button value="7">7天</Radio.Button>
				          <Radio.Button value="30">30天</Radio.Button>
				          <Radio.Button value="userdefine">自定</Radio.Button>
				        </Radio.Group>
					</div>
					<ResponsiveContainer minHeight={360}>
				        <LineChart data={dataSource}>
				          <Legend verticalAlign="top" payload={dataStyle}/>
				          <XAxis dataKey="date" stroke='#0086CB' />
				          <YAxis stroke='#0086CB'/>
				          <CartesianGrid stroke='#F1F1F1'  />
				          <Tooltip payload={dataStyle}/>
				          {dataStyle.map(v=>(<Line key={v.name} type="monotone" dataKey={v.name} stroke={v.color} strokeWidth={1}  />))}
				        </LineChart>
				    </ResponsiveContainer>
	      		</div>
	   		</div>
		);
	}
}

export default Main;