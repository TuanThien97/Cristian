import * as React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const axios = require('axios');
const FormItem = Form.Item;

class Delete extends React.Component<any, any> {
	handleSubmit = (e) => {
    	let c = confirm("Are you sure want to delete?");
    	if(c===true) {
	    	e.preventDefault();
	    	this.props.form.validateFields((err, values) => {
	      		if (!err) {
	        		axios.post('http://wp-url/delete/post/', {
	          			post_id: values.post_id
	        		}).then(function (response) {
	          			console.log(response);
	        		}).catch(function (error) {
	          			console.log(error);
	        		});
	      		}
	    	});
	    }
	}

	public render() {
		const { getFieldDecorator } = this.props.form;
		return(
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormItem label="Id">
          				{getFieldDecorator('post_id', {
            				rules: [{ required: true, message: 'Please input your post id!' }],
          				})(
            			<Input placeholder="Input Id Here"/>
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

const aDelete = Form.create()(Delete);
export default aDelete;