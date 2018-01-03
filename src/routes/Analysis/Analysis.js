import React from 'react';
import {
	connect
} from 'dva';
import styles from '~/src/less/Analysis.less';
import ContentHeader from '~/src/components/_common/ContentHeader'
import Header from './components/Header'

class Analysis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const {children,location} = this.props;
  	const navItem = ['数据分析']
    return (
      <div className='flex-1 flex-box-v'>
	    	<ContentHeader item={navItem}>
				<Header location={location}></Header>
	    	</ContentHeader>
	    	{children}
		</div>
    );
  }
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(Analysis);