import React from 'react'

import { Form, Row, Col, Icon, Input, Collapse, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";
import CreateCourse from './CreateCourse'
import EditCourse from './EditCourse'

import { login } from '../../models/login.js'
const Panel = Collapse.Panel;


class CourseItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.callback = this.callback.bind(this)

    }

    callback() {
        console.log('ss')
        this.props.dispatch({
            type: 'courseModel/queryCourse',
            payload: {}
        })
    }


    render() {

        return (
            <div>
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="创建课程" key="1">
                        <CreateCourse dispatch={this.props.dispatch}></CreateCourse>
                    </Panel>
                    <Panel header="管理课程" key="2">
                        <EditCourse courseData={this.props.courseData} dispatch={this.props.dispatch}></EditCourse>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default CourseItem = Form.create({})(CourseItem);