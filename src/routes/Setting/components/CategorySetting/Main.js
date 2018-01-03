import React from 'react';
import styles from './Main.less';
import {
	Button,
	Input,
	Card,
	Row,
	Col,
	Form,
	Upload,
	Icon
} from 'antd';
const FormItem = Form.Item;
import {
	Link
} from 'dva/router';
import cx from 'classnames/bind';
const cxs = cx.bind(styles);
class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	handleSubmit = (e) => {
	    e.preventDefault();

	    this.props.form.validateFields((err, fieldsValue) => {
	      if (err) {
	        return;
	      }

	    });
	  }
	render() {
		const { getFieldDecorator } = this.props.form;
	    const formItemLayout = {
	      labelCol: {
	        md: { span: 24 },
	        lg: { span: 6 }
	      },
	      wrapperCol: {
	        md: { span: 24 },
	        lg: { span: 18 }
	      },
	    };
	    const tailFormItemLayout = {
	      wrapperCol: {
	        xs: {
	          span: 24,
	          offset: 0,
	        },
	        sm: {
	          span: 14,
	          offset: 6,
	        },
	      },
	    };
		return (
			<div className='content-main flex-1 flex-box category-setting'>
	      		<Row gutter={80} className='flex-1'>
			      <Col lg={8} md={24}>
			        <Card style={{minHeight: 634}} title='默认分类设置' bordered={false}>
						<Form hideRequiredMark={true} onSubmit={()=>{}}>

							<FormItem
					          {...formItemLayout}
					          label="分类名称"
					        >
					          {getFieldDecorator('categoryName', {
					            rules: [{
					              required: true, message: '分类名称必填',
					            }],
					          })(
					            <Input />
					          )}
					        </FormItem>

					        <FormItem
					          {...formItemLayout}
					          label="页面标题"
					        >
					          {getFieldDecorator('pageTitle', {
					            rules: [{
					              required: true, message: '页面标题必填',
					            }],
					          })(
					            <Input />
					          )}
					        </FormItem>

					        <FormItem
					          {...formItemLayout}
					          label="页面文本"
					        >
					          {getFieldDecorator('pageContent', {
					            rules: [{
					              required: true, message: '页面文本必填',
					            }],
					          })(
					            <Input />
					          )}
					        </FormItem>
							

							<FormItem
					          {...formItemLayout}
					          label="页面图片"
					        >
					          <div className={styles.dropbox}>
					            {getFieldDecorator('dragger', {
					              valuePropName: 'pageLogo',
					              getValueFromEvent: this.normFile,
					            })(
					              <Upload.Dragger name="file" listType='picture' multiple={false} accept='.jpg,.png' action="/upload.do">
					                <p className="ant-upload-drag-icon">
					                  <Icon type="inbox" />
					                </p>
					                <p className="ant-upload-text">点击或拖拽LOGO图片到此区域</p>
					                <p className="ant-upload-hint">建议大小500px*200px</p>
					              </Upload.Dragger>
					            )}
					          </div>
					        </FormItem>

					        <FormItem {...tailFormItemLayout}>
					          <Button className={styles['sub-btn']} type="primary" htmlType="submit">保存</Button>
					        </FormItem>
					    </Form>
			        </Card>
			      </Col>
			      <Col lg={10} md={24} >
			        <Card style={{minHeight: 634}} title="页面预览" bordered={false}>
						<div className={cxs('flex-box','preview-box','flex-center-center')}>
							<div className={cxs('preview','flex-box-v','flex-v-ce')}>
								<div className={cxs('logo')}></div>
								<div className={cxs('title')}>
									专业贷款服务平台
								</div>
								<div className={cxs('not-input')}></div>
								<div className={cxs('content')}>
									提交资料后，将会有贷款专员与您联系!
								</div>
								<div className={cxs('bg')}></div>
							</div>
						</div>
			        </Card>
			      </Col>
			    </Row>
	   		</div>
		);
	}
}
Main = Form.create()(Main);
export default Main;