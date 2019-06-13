import React from 'react'

import { Form, Row, Col, List, Input, Button, Card, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class ManageClassStu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: false,
            start: '',
            end:''
        }
this.start = this.start.bind(this)
this.end = this.end.bind(this)
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

    exitClass(data) {
        console.log(data)
        this.props.dispatch({
            type: 'classModel/exitClass',
            payload: {
                id: data
            }
        })

        this.setState({ value: true })
    }


    leave(data,teacher_id) {
        console.log(data)
        console.log(this.state.start)
        console.log(this.state.end)
        console.log(teacher_id)
        this.props.dispatch({
            type: 'classModel/submitLeave',
            payload: {
                class_id: data,
                teacher_id: teacher_id,
                begin_time:this.state.start,
                end_time:this.state.end
            }
        })

        this.setState({ value: true })
    }


    start(e){
        this.setState({
            start:e.target.value
        })
    }

    end(e){
        this.setState({
            end:e.target.value
        })
    }
    render() {
        console.log('render')
        console.log(this.props)
        const { classData } = this.props;

        if (!classData) {
            // this.props.dispatch({
            //     type: 'classModel/queryClass',
            //     payload: {}
            // })
        }
        const { data } = classData



        return (
            <div>
                {this.state.value && (
                    <Alert message="Success Text" type="success" />
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

                                    <div style={{height:'75px'}}>
                                        <div style={{float:'left'}}>
                                        开始时间<input type="text" onChange={this.start}/>
                                        </div>
                                        <div style={{float:'left'}}>
                                        结束时间<input type="text" onChange={this.end}/>
                                        </div>
                                    </div>
        
                                 <Button style={{ float: 'right' }} value={data.id} onClick={() => this.exitClass(data.id)} type="">退出班级</Button>
                                    <Button style={{ float: 'right' }} value={data.id} onClick={() => this.leave(data.id,data.teacher_id)} type="">请假</Button>
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

export default ManageClassStu = Form.create({})(ManageClassStu);