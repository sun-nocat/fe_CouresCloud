import React from 'react'

import { Form, Row, Col, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class CreateClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }


    handleSubmit = e => {
		e.preventDefault();
		console.log(e)


		this.props.form.validateFields((err, values) => {
            console.log(values)
			if (!err) {
				this.props.dispatch({
					type: 'classModel/createClass',
					payload: values
				}
				)
			}
		});
	};

    render() {

        console.log('render')
        const { isCreateClass } = this.props
        console.log(isCreateClass)

        
		const { getFieldDecorator } = this.props.form

		return (

            <div>
                {isCreateClass && (
                    <Alert message="创建成功" type="success" />
                    )}
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator('name', {
						rules: [{ required: true, message: '输入班级名称' }],
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="name"
						/>,
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('msg', {
						rules: [{ required: true, message: '输入班级描述!' }],
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="msg"
						/>,
					)}
				</Form.Item>
                <Form.Item>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '输入班级密码!' }],
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="password"
                            type="password"
						/>,
					)}
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						创建
                    </Button>

				</Form.Item>
			</Form>
            </div>

		);
    }
}

export default CreateClass = Form.create({})(CreateClass);