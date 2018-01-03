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
        <Menu.Item key={`/setting/text`} className='content-header-tab'>
        	<Link to={`/setting/text`}>关于我们</Link>
        </Menu.Item>
      </Menu>
	);
}

export default Header;