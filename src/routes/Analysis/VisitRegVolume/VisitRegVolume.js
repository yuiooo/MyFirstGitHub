import React from 'react';
import {
	connect
} from 'dva';
import ContentHeader from '~/src/components/_common/ContentHeader'
import Main from '../components/VisitRegVolume/Main'

function VisitRegVolume({
	children,
	location
}) {
	return (
		<Main></Main>
	);
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(VisitRegVolume);