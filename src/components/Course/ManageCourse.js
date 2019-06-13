import React from 'react'

import { Form, Row, Col, List, Input, Button, Card, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class ManageCourse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }

        this.click = this.click.bind(this)

    }

    componentDidMount() {

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

    count(data) {
        console.log(data)
        if (data) {
            const da = data.split(',')
            const res = String(da.length) + '人'
            return res
        } else {
            return '0人'
        }

    }

    click(id) {
        console.log(id)

        this.props.dispatch({
            type: 'courseModel/chooseCourse',
            payload: {
                id: id
            }
        })
        this.setState({success: true})
    }

    render() {

        console.log('render')
        const { courseData } = this.props;
        // if (!courseData) {
        //     this.props.dispatch({
        //         type: 'courseModel/queryCourse',
        //         payload: {}
        //     })
        // }
        // this.props.dispatch({
        //     type: 'courseModel/queryCourse',
        //     payload: {}
        // })
        const { data } = courseData



        return (
            <div>
                {this.state.success && (
                    <Alert message="选课成功" type="success" />
                    )}
                {data && (


                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 3,
                        }}
                        dataSource={data}
                        renderItem={data => (
                            <List.Item>
                                <Card title={data.name}>
                                    {data.msg}
                                    <div>
                                        {data.dept && <Button style={{}} size="small" type="dashed">{data.dept}</Button>}

                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{data.requires == '0' ? '必修' : '选修'}</Button>
                                    </div>
                                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        <Button style={{}} size="small" type={data.status == "0" ? "dashed" : 'danger'}>{data.status == '0' ? '公有' : '私有'}</Button>
                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{String(data.grade) + '分'}</Button>

                                    </div>


                                    <Button style={{ float: 'right' }} onClick={() => this.click(data.id)} type="primary">申请</Button>

                                </Card>
                            </List.Item>
                        )}
                    />



                )

                }

            </div>

        );
    }
}

export default ManageCourse = Form.create({})(ManageCourse);