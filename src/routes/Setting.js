import React from 'react';
import { connect } from 'dva';
import styles from '~/src/less/Setting.less';

function Setting() {
  return (
    <div className={styles.normal}>
      Route Component: Setting
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Setting);
