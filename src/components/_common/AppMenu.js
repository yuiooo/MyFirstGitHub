import React from 'react';
import styles from './AppMenu.less';
import {
	Link
} from 'dva/router';
import Person from './Person'
import { Menu, Icon, Avatar } from 'antd';
const { SubMenu } = Menu;
function AppMenu({location}) {
  return (
      <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[location.pathname,`/${location.pathname.split('/')[1]}`]}
      defaultOpenKeys={[`/${location.pathname.split('/')[1]}`]}
      className={styles['app-menu']}
    >
      
	  <Menu.Item key="avatar" style={{height: 60,padding: '10px 12px',lineHeight: '16px'}}>
		<Person />
	  </Menu.Item>
      <Menu.Item key="/user"><Link to="/user"><Icon  type="user" />用户管理</Link></Menu.Item>
      <Menu.Item key="/analysis"><Link to="/analysis"><Icon  type="bar-chart" />数据分析</Link></Menu.Item>
      <SubMenu key="/setting" title={<span><Icon type="setting" />系统设置</span>}>
        <Menu.Item key="/setting/text"><Link to="/setting/text">文本设置</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default AppMenu;
