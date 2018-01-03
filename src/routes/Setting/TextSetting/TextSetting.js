import React from 'react';
import {
	connect
} from 'dva';
import ContentHeader from '~/src/components/_common/ContentHeader'
import Header from '../components/TextSetting/Header'
import Main from '../components/TextSetting/Main'

function TextSetting({
	location
}) {
	const navItem = ['系统设置','文本设置']
	return (
		<div className='flex-1 flex-box-v'>
	    	<ContentHeader item={navItem}>
				<Header location={location}></Header>
	    	</ContentHeader>
	    	<Main></Main>
		</div>
	);
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(TextSetting);