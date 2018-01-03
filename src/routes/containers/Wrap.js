import React from 'react';
import { connect } from 'dva';
import styles from './Wrap.less';

function Wrap({children}) {
  return (
    <div className={styles.full}>
      {children}
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Wrap);
