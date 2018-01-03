import React from 'react';
import {
	connect
} from 'dva';
import styles from '~/src/less/Setting.less';

function Setting({
	children,
	location
}) {
	const navItem = ['数据分析']
	return (
	   	{children}
	);
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(Setting);