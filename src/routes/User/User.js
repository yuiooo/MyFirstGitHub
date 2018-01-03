import React from 'react';
import {
	connect
} from 'dva';
import styles from '~/src/less/User.less';
import ContentHeader from '~/src/components/_common/ContentHeader'
import Header from './components/Header'
import Main from './components/Main'


function User({
	location,
	children
}) {
	const navItem = [ '用户管理']
	return (
		<div className='flex-1 flex-box-v'>
		{children ? children : 
		<div className='flex-1 flex-box-v'>
	    	<ContentHeader item={navItem}>
				<Header></Header>
	    	</ContentHeader>
	    	<Main></Main>
	    </div>
		}
		</div>
		
	);
}

function mapStateToProps() {
	return {

	};
}

export default connect(mapStateToProps)(User);