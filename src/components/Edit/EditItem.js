import React from 'react'

import { Form, Row, Col, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class EditItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: 'student'
        }

        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.props.dispatch({
            type:'editModel/getData',
            payload: {}
        })
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
                    type: 'editModel/updateMessage',
                    payload: values
                })

            }
        });
    };


    render() {

        const { userData, isSuccess } = this.props;
        if (!userData.type) {
            return (<div>未登录</div>)
        }
        const Datas = userData.type.msg
        const { getFieldDecorator } = this.props.form
        const  { status } = Datas

        return (
            <div>
                <Row type="flex" justify="center" align="top" style={{ height: '100%',marginTop:'10px' }}>
                    <Col span={16} style={{ fontSize: '28px' }}>


                {isSuccess &&
                <Alert message="信息修改成功" type="success" />
                }

                {status === 1 && (
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: '请输入账号!' }],
                                initialValue: Datas.account

                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                    disabled = {true} 
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                                initialValue: Datas.password

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
                                initialValue: Datas.name
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
                                initialValue: Datas.student_id
                                

                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="number"
                                    placeholder="学号"
                                    disabled = {true} 

                                />,
                            )}
                        </Form.Item>                                        <Form.Item>
                            {getFieldDecorator('tel', {
                                rules: [{ required: true, message: '请输入电话号码!' }],
                                initialValue: Datas.tel

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
                                initialValue: Datas.email

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
                                initialValue: Datas.sex

                            })(
                                <Radio.Group                                     disabled = {true} 
                                >
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                        <Form.Item>


                            <Button type="primary" htmlType="submit" className="login-form-button">
                                修改
						</Button>

                        </Form.Item>
                    </Form>
                )}
                {status === 2 && (
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: '请输入账号!' }],
                                initialValue: Datas.account

                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                    disabled = {true} 

                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                                initialValue: Datas.password

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
                                initialValue: Datas.name

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
                                rules: [{ required: true, message: '请输入职工号!' }],
                                initialValue: Datas.teacher_id

                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="number"
                                    placeholder="职工号"
                                    disabled = {true} 

                                />,
                            )}
                        </Form.Item>                                        <Form.Item>
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: '请输入职称!' }],
                                initialValue: Datas.title

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
                                initialValue: Datas.dept_num

                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="学院"
                                />,
                            )}
                        </Form.Item>                                          <Form.Item>
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: '请输入性别!' }],
                                initialValue: Datas.sex

                            })(
                                <Radio.Group                                     disabled = {true} 
                                >
                                    <Radio value={0}>男</Radio>
                                    <Radio value={1}>女</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            修改
						</Button>

                        </Form.Item>
                    </Form>

                )}

                    </Col>
                </Row>


            </div>

        );
    }
}

export default EditItem = Form.create({})(EditItem);