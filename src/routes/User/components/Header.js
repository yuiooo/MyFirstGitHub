import React from 'react';
import {Select, Input, Button} from 'antd'
const Option = Select.Option;

function Header() {
	return (
		<div className='flex-box flex-1'>
     		<div className="flex-1"></div>
			<Select className='margin-right15' defaultValue="id" style={{ width: 80 }} >
     			<Option value="id">用户ID</Option>
    		</Select>
			<Input className='margin-right15' style={{ width: 170 }} placeholder='请输入搜索内容'></Input>
			<Button>搜索</Button>
    </div>
	);
}

export default Header;