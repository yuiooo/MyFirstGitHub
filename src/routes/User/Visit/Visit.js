import React from 'react';
import {
	connect
} from 'dva';
import ContentHeader from '~/src/components/_common/ContentHeader'
import Main from '../components/Visit/Main'


function Visit({
	dispatch,
	location
}) {
	const navItem = [ '用户管理','Ray-Lam','访问量'];
	return (
		<div className='flex-1 flex-box-v'>
	    	<ContentHeader dispatch={dispatch} item={navItem} goBack={true}></ContentHeader>
	    	<Main></Main>
	    </div>
	);
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(Visit);