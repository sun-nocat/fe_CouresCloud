import React from 'react'

import { Form, Row, Col, Icon,List,Card, Input, Collapse, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";
import CreateCourse from './CreateCourse'
import EditCourse from './EditCourse'

import { login } from '../../models/login.js'
const Panel = Collapse.Panel;


class QueryCourseMsg extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.callback = this.callback.bind(this)

    }
    // C:\code\ClouseCloud_\routes\static\upload
    // C:\code\ClouseCloud_\code\ClouseCloud_\routes\static\upload\navicat.exe
    down(url) {
        console.log(url)
        // window.open(url)
        this.props.dispatch({
            type:'courseModel/download',
            payload:{
                path: url,
            }
        })
    }

    callback() {
        console.log('ss')
        this.props.dispatch({
            type: "courseModel/queryCourseMsg",
            payload: {},
    });
    }


    render() {

        const { queryCourseMsg } = this.props
        if (!queryCourseMsg) {
            this.props.dispatch({
                type: "courseModel/queryCourseMsg",
                payload: {},
        });
    return <div>空</div>
    }
        const { public:pub, private:pri } = queryCourseMsg
        console.log(queryCourseMsg)

        return (
            <div>
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="公共课程资源" key="1">

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
                        dataSource={pub}
                        renderItem={pub => (
                            <List.Item>
                                <Card title={pub.courseName}>
                                <div>
                                <Button style={{}} size="small" type={'default'}>{pub.name}</Button>
                                <Button style={{}} size="small" onClick={()=>this.down(pub.name)} type={'dashed'}>下载</Button>
                                </div>

                                    {/* {pub.msg}
                                    <div>
                                        {pub.dept && <Button style={{}} size="small" type="dashed">{data.dept}</Button>}

                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{data.requires == '0' ? '必修' : '选修'}</Button>
                                    </div>
                                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        <Button style={{}} size="small" type={pub.status == "0" ? "dashed" : 'default'}>{data.status == '0' ? '公有' : '私有'}</Button>
                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{String(data.grade) + '分'}</Button>
                                    </div>
                                    <Button style={{ float: 'right' }} onClick={() => this.click(data.id)} type="danger">退课</Button> */}

                                </Card>
                            </List.Item>
                        )}
                    />

                    </Panel>
                    <Panel header="私有课程资源" key="2">

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
                        dataSource={pri}
                        renderItem={pri => (
                            <List.Item>
                                <Card title={pri.courseName}>
                                <div>
                                <Button style={{}} size="small" type={'default'}>{pri.name}</Button>
                                {/* <a href={`${pri.file.replace(/\//g,"\\")}`}>下载</a> */}
                                <Button style={{}} size="small" onClick={()=>this.down(pri.name)} type={'dashed'}>下载</Button>
                                </div>

                                    {/* {pub.msg}
                                    <div>
                                        {pub.dept && <Button style={{}} size="small" type="dashed">{data.dept}</Button>}

                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{data.requires == '0' ? '必修' : '选修'}</Button>
                                    </div>
                                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        <Button style={{}} size="small" type={pub.status == "0" ? "dashed" : 'default'}>{data.status == '0' ? '公有' : '私有'}</Button>
                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{String(data.grade) + '分'}</Button>
                                    </div>
                                    <Button style={{ float: 'right' }} onClick={() => this.click(data.id)} type="danger">退课</Button> */}

                                </Card>
                            </List.Item>
                        )}
                    />                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default QueryCourseMsg = Form.create({})(QueryCourseMsg);