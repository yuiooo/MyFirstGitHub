import React from 'react';
import {Select, Input, Button, Menu} from 'antd'
import {Link,IndexLink} from 'dva/router'
const Option = Select.Option;

function Header({
	location
}) {
	return (
		<Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
      >
        <Menu.Item key={`/analysis`} className='content-header-tab'>
        	<Link to={`/analysis`}>用户量</Link>
        </Menu.Item>
        <Menu.Item key={`/analysis/visitRegVolume`} className='content-header-tab'>
        	<Link to={`/analysis/visitRegVolume`}>访问登记量</Link>
        </Menu.Item>
      </Menu>
	);
}

export default Header;