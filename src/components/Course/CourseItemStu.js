import React from 'react'

import { Form, Row, Col, Icon, Input, Collapse, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";
import MyCourse from './MyCourse'
import ManageCourse from './ManageCourse'

import { login } from '../../models/login.js'
const Panel = Collapse.Panel;


class CourseItemStu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.callback = this.callback.bind(this)

    }

    componentDidMount(){
        this.props.dispatch({
            type: 'courseModel/queryCourse',
            payload: {}
        })
        this.props.dispatch({
            type: 'courseModel/myCourse',
            payload: {}
        })
    }
    callback() {
        this.props.dispatch({
            type: 'courseModel/queryCourse',
            payload: {}
        })
        this.props.dispatch({
            type: 'courseModel/myCourse',
            payload: {}
        })
    }


    render() {

        return (
            <div>
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>

                    <Panel header="选课" key="1">
                        <ManageCourse courseData={this.props.courseData} dispatch={this.props.dispatch}></ManageCourse>
                    </Panel>
                                        <Panel header="加入的课程" key="2">
                        <MyCourse myCourse={this.props.myCourse}  dispatch={this.props.dispatch}></MyCourse>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default CourseItemStu = Form.create({})(CourseItemStu);