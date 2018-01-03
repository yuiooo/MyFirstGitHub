import React from 'react';
import styles from './AppHeader.less';
import classNames from 'classnames/bind';
import {Dropdown, Button, Menu, Icon} from 'antd';

function AppHeader() {
	var cx = classNames.bind(styles);
	const handleMenuClick = ()=>{};
	const menu = (
		<Menu onClick={handleMenuClick}>
		    <Menu.Item key="1"><Icon type="poweroff" /> 注销登录</Menu.Item>
	 	</Menu>
	);
	return (
		<div className={cx('header', 'flex-h-ce','flex-box')} >
		<div className='flex-box'>
			<div className={cx('logo')}></div>
			<div className="flex-1 white">dva-管理后台demo</div>
		</div>
		<div className="flex-1"></div>
		<Dropdown overlay={menu}>
	      <Button>
	       <Icon  style={{ fontSize: 12 }} type="user" /> Admin <Icon type="down" />
	      </Button>
	    </Dropdown>
	</div>
	);
}

export default AppHeader;