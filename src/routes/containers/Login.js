import React from 'react';
import {
	connect
} from 'dva';
import styles from './Login.less';
import { ajax } from '~/src/utils/ajax'
import * as $api from '~/src/utils/localStorage'
import { routerRedux } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.gtInit = this.gtInit.bind(this);
		this.handlerPopup = this.handlerPopup.bind(this);
	}
	componentDidMount() {
		this.gtInit();
		console.log(this.props)
	}
	gtInit(){
		var self = this;
		ajax({
			ctrl: 'Login',
			fn: 'geetest'
		}).then(body => {
			console.log(body)
			// console.log("图片sid: " + body.sid);
			$api.setStorage('sid', body.sid);
			const {challenge, success, gt} = body.geetest
			initGeetest({
				gt,
				challenge,
				product: 'float',
				offline: !success
			}, self.handlerPopup);
		})
	}
	handlerPopup(captchaObj){
		// 将验证码加到id为captcha的元素里
		$('#popup-captcha').html('');
		captchaObj.appendTo("#popup-captcha");
		this.captchaObj = captchaObj;
	}
	handleSubmit = (e) => {
	    e.preventDefault();
	    const self = this;
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	var validate = this.captchaObj.getValidate();
			if(!validate){
				message.error('请先完成验证！',3);
				return;
			}

			const {
				geetest_challenge,
				geetest_validate,
				geetest_seccode
			} = validate;

			// console.log(validate)

			/*二次验证*/
			ajax({
				ctrl: 'Login',
				fn: 'geetest_verify',
				data: {
					geetest_challenge,
					geetest_validate,
					geetest_seccode
				},
				action_404: function(data){
					// console.log($api.getStorage('sid')||'undefined')
					console.log(data)
				}
			}).then(body => {
				if(body.success === 'success'){
					console.log('Received values of form: ', values);
					this.props.dispatch(routerRedux.push({
						pathname: '/user',
					}))
				}
			})
	      }
	    });
	  }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className={`${styles.wrapper} main flex-box flex-center-center`}>
				{ /*登陆框*/ }
				<div className={styles['login-frame']}>
					<div className={styles['login-logo']}></div>
					<Form onSubmit={this.handleSubmit} className={styles['login-form']}>
				        <FormItem>
				          {getFieldDecorator('username', {
				            rules: [{ required: true, message: '请输入用户名' }],
				            initialValue: `admin`
				          })(
				            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: '请输入密码' }],
				            initialValue: `admin`
				          })(
				            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
				          )}
				        </FormItem>
				        <FormItem>
				        	<div id="popup-captcha"></div>
				        </FormItem>
				        <FormItem>
				          <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
				            登录
				          </Button>
				        </FormItem>
				    </Form>
				</div>
			</div>
		);
	}
}

Login = Form.create({})(Login);
function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps)(Login);