// 已经选择的课程

import React from 'react'

import { Form, Row, Col, List, Input, Button, Card, Alert } from 'antd';
import { Link } from "dva/router";



class MyCourse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }

        this.click = this.click.bind(this)

    }

    componentDidMount() {

    }




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
// 退课
    click(id) {
        console.log(id)

        this.props.dispatch({
            type: 'courseModel/delMyCourseStudent',
            payload: {
                id: id
            }
        })
        this.setState({success: true})
    }
    render() {

        console.log('render')
        console.log('获取到数据')
        const { myCourse } = this.props;

        const { data } = myCourse
        console.log(data)



        return (
            <div>
                {this.state.success && (
                    <Alert message="退课成功" type="success" />
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
                                        <Button style={{}} size="small" type={data.status == "0" ? "dashed" : 'default'}>{data.status == '0' ? '公有' : '私有'}</Button>
                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{String(data.grade) + '分'}</Button>
                                    </div>
                                    <Button style={{ float: 'right' }} onClick={() => this.click(data.id)} type="danger">退课</Button>

                                </Card>
                            </List.Item>
                        )}
                    />
                )}
            </div>

        );
    }
}

export default MyCourse = Form.create({})(MyCourse);