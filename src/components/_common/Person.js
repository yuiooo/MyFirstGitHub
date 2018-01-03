import React from 'react';
import styles from './Person.less';
import {Avatar} from 'antd';

function Person() {
  return (
    <div className="flex-box flex-h-ce" >
		<div className="img-frm">
			<div className={styles.person}></div>
		</div>
		{/*<Avatar src={'../../../assets/avatar.png'}></Avatar>*/}
		<div className="flex-1" style={{marginLeft: 10}}>
			<div className="flex-box">
				<div className="flex-1">{ 'admin'}</div>
			</div>
			<div>{ '超级管理员'}</div>
		</div>
	</div>
  );
}

export default Person;
