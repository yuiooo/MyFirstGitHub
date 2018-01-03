import React from 'react';
import styles from './ContentHeader.less';
import {Button} from 'antd';
import {routerRedux } from 'dva/router'

function ContentHeader({dispatch,item,goBack,children}) {
	const itemNode = item && item.map((v,i)=>{
		if(i == 0){
			return <span key={i}>{v}</span>
		}else{
			return <small key={i}> - {v}</small>
		}
	})
	return (
    <div className='content-header flex-box flex-h-ce'>
      	{item && <div className='margin-right15'>
			{itemNode}
      	</div>}
      	{goBack && <Button type="default" icon="arrow-left" onClick={()=>{
      		dispatch(routerRedux.goBack())
      	}}>返回上一页</Button>}
      	{children}
    </div>
  );
}

export default ContentHeader;
