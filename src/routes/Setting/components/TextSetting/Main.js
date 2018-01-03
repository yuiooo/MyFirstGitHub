import React from 'react';
import styles from './Main.less';
import {
	Button,
	Input
} from 'antd';
import {
	Link
} from 'dva/router';
const { TextArea } = Input;
class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='content-main flex-1 flex-box-v flex-v-ce'>
	      		<TextArea autosize={false} className='flex-1' />
				<Button type="primary" className={styles.btn}>保存</Button>
	   		</div>
		);
	}
}

export default Main;