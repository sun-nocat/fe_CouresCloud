import React from 'react'

import { Form, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class LoginItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: props.value
		}

		this.onChange = this.onChange.bind(this)
	}



	onChange(e) {
		this.setState({ value: e.target.value })
	}

	register() {
		console.log('注册')

	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(e)


		this.props.form.validateFields((err, values) => {
			if (!err) {
				values['user'] = this.state.value
				this.props.dispatch({
					type: 'loginModel/login',
					payload: values
				}
				)
			}
		});
	};


	render() {

		console.log('render')
		const { user } = this.props;
		let error
		console.log(user)
		if (user && user.status) {
			console.log('跳转')
			console.log(this.props)
			this.props.history.push('/')
		} else {

		}

		if (user && !user.status) {
			error = true
		}
		if (user && !user.msg) {
			error = false
		}
		const { getFieldDecorator } = this.props.form

		return (

			<div>

				{error && <Alert message="登录失败" type="error" />	
					}

								<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator('account', {
						rules: [{ required: true, message: 'Please input your account!' }],
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Username"
						/>,
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Password"
						/>,
					)}
				</Form.Item>
				<Form.Item>
					<Form.Item>

						<Radio.Group onChange={this.onChange} value={this.state.value}>
							<Radio value={'student'}>学生</Radio>
							<Radio value={'teacher'}>教师</Radio>
							{/* <Radio value={'admin'}>管理员</Radio> */}

						</Radio.Group>
					</Form.Item>

					<Button type="primary" htmlType="submit" className="login-form-button">
						登录
						</Button>
					<Link to="/register" style={{ position:'relative', left: '100px'}}>
						<span>注册</span>
					</Link>
				</Form.Item>
			</Form>
			</div>
	
		);
	}
}

export default LoginItem = Form.create({})(LoginItem);