import React from 'react'

import { Form, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class RegisterItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: 'student'
        }

        this.onChange = this.onChange.bind(this)
    }



    onChange(e) {
        this.setState({ user: e.target.value })
    }

    register() {
        console.log('注册')

    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e)


        this.props.form.validateFields((err, values) => {
            if (!err) {
                values['user'] = this.state.user
                console.log(values)
                this.props.dispatch({
                    type: 'loginModel/register',
                    payload: values
                })
                
            }
        });
    };


    render() {

        const { registerState } = this.props;
        console.log(registerState)

        // 暂时
        if (registerState === 1) {
            this.props.history.push('/login')
        }


        const { getFieldDecorator } = this.props.form

        return (
            <div>
                {registerState === 0&&(
                    <Alert message="账号已经存在" type="warning" />
                )}
                {registerState === -1&&(
                    <Alert message="注册失败" type="error" />
                )}

                <Radio.Group onChange={this.onChange} value={this.state.user}>
                    <Radio value={'student'}>学生</Radio>
                    <Radio value={'teacher'}>教师</Radio>
                </Radio.Group>

                {this.state.user === 'student' && (
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: '请输入账号!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入姓名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    typr="string"
                                    placeholder="姓名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('student_id', {
                                rules: [{ required: true, message: '请输入学号!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="number"
                                    placeholder="学号"
                                />,
                            )}
                        </Form.Item>                                        <Form.Item>
                            {getFieldDecorator('tel', {
                                rules: [{ required: true, message: '请输入电话号码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="number"
                                    placeholder="电话号码"
                                />,
                            )}
                        </Form.Item>                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: '请输入邮箱地址!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="email"
                                    placeholder="邮箱地址"
                                />,
                            )}
                        </Form.Item>                                          <Form.Item>
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: '请输入性别!' }],
                            })(
                                <Radio.Group>
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                        <Form.Item>


                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
						</Button>

                        </Form.Item>
                    </Form>
                    )}
                {this.state.user === 'teacher' && (
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: '请输入账号!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入姓名!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    typr="string"
                                    placeholder="姓名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('teacher_id', {
                                rules: [{ required: true, message: '请输入学号!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="number"
                                    placeholder="职工号"
                                />,
                            )}
                        </Form.Item>                                        <Form.Item>
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: '请输入职称!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="string"
                                    placeholder="职称"
                                />,
                            )}
                        </Form.Item>                        <Form.Item>
                            {getFieldDecorator('dept_num', {
                                rules: [{ required: true, message: '请输入学院!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="学院"
                                />,
                            )}
                        </Form.Item>                                          <Form.Item>
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: '请输入性别!' }],
                            })(
                                <Radio.Group>
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
						</Button>

                        </Form.Item>
                    </Form>

                )}


                {/* <Form onSubmit={this.handleSubmit} className="login-form">
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


                        </Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
						</Button>
                        <Link to="/register" style={{ position: 'relative', left: '100px' }}>
                            <span>注册</span>
                        </Link>
                    </Form.Item>
                </Form> */}
            </div>

        );
    }
}

export default RegisterItem = Form.create({})(RegisterItem);