import * as React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const axios = require('axios');
const FormItem = Form.Item;

class Edit extends React.Component<any, any> {
	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('http://wp-url/edit/post/', {
          post_id: values.post_id,
          post_content: values.post_content,
          post_title: values.post_title
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
      }
    });
  }
	public render() {
		const { getFieldDecorator } = this.props.form;
		return(
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormItem label="ID">
          	{getFieldDecorator('post_id', {
            rules: [{ required: true, message: 'Please input your post id!' }],
          })(
            <Input placeholder="Input Id Here!"/>
          )}
        </FormItem>
        <FormItem label="Title">
            {getFieldDecorator('post_title', {
            rules: [{ required: true, message: 'Please input your post title!' }],
          })(
            <Input placeholder="Input Title Here!"/>
          )}
        </FormItem>
					<FormItem label="Content">
          {getFieldDecorator('post_content', {
            rules: [{ required: true, message: 'Please input your post content!' }],
          })(
            <Input placeholder="Input Content Here!"/>
          )}
        </FormItem>
					<FormItem>
						<Button htmlType="submit" type="primary">Submit</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}

const aEdit = Form.create()(Edit);
export default aEdit;