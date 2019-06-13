import React from 'react'

import { Form, Row, Col, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class CreateCourse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isCreateClass: false
        }

    }


    handleSubmit = e => {
        e.preventDefault();
        console.log(e)


        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                console.log(this.props)
                this.props.dispatch({
                    type: 'courseModel/createCourse',
                    payload: values
                }
                )

                this.setState({
                    isCreateClass: true
                })


            }
        });
    };

    render() {

        // console.log('render')
        // const { isCreateClass } = this.props
        // console.log(isCreateClass)


        const { getFieldDecorator } = this.props.form

        return (

            <div>
                {this.state.isCreateClass && (
                    <Alert message="创建成功" type="success" />
                    )}

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '输入课程名称' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="课程名称"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('dept', {
                            rules: [{ required: true, message: '输入所在学院描述!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="学院"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('grade', {
                            rules: [{ required: true, message: '输入课程学分!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="学分"
                                type="number"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('requires', {
                            rules: [{ required: true, message: '请选择课程性质!' }],
                        })(
                            <Radio.Group>
                                <Radio value={0}>必修</Radio>
                                <Radio value={1}>选修</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('status', {
                            rules: [{ required: true, message: '请输入课程类别!' }],
                        })(
                            <Radio.Group>
                                <Radio value={0}>公有</Radio>
                                <Radio value={1}>私有</Radio>
                            </Radio.Group>,
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

export default CreateCourse = Form.create({})(CreateCourse);