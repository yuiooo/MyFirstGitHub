import React from 'react';
import { connect } from 'dva';
import styles from './App.less';
import {
	Link
} from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import AppMenu from '~/src/components/_common/AppMenu'
import AppHeader from '~/src/components/_common/AppHeader'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className={styles.full}>
		    <Header className={styles.header}>
		      <AppHeader />
		    </Header>
		    <Layout>
		      <Sider width={200}>
		        <AppMenu location = {this.props.location}></AppMenu>
		      </Sider>
		      <Layout>
		        <Content className='flex-box-v'>
		          { this.props.children }
		        </Content>
		      </Layout>
		    </Layout>
		</Layout>
    );
  }
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
