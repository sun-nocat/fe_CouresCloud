import React from 'react'

import { Form, Collapse, Row, Col, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";
import CreateClass from './CreateClass'
import ManageClassStu from './ManageClassStu'
import ManageAllClassStu from './ManageAllClassStu'

import { login } from '../../models/login.js'
const Panel = Collapse.Panel;


class ClassItemStu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.callback = this.callback.bind(this)
    }


    componentDidMount(){
        this.props.dispatch({
            type: 'classModel/queryClass',
            payload: {}
        })
        this.props.dispatch({
            type: 'classModel/queryAllClass',
            payload: {}
        })
    }
    callback(key) {
        console.log(key);

        this.props.dispatch({
            type: 'classModel/queryClass',
            payload: {}
        })
        this.props.dispatch({
            type: 'classModel/queryAllClass',
            payload: {}
        })
    }


    render() {
        
        const { type } = this.props.userData
        console.log(type)
        if (!type) {
            return <div>未登录</div>
        }

        console.log(this.props.AllClassData)
        return (
            <div>
                <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                    <Panel header="自己加入的班级" key="1">
                        <ManageClassStu classData={this.props.classData} dispatch={this.props.dispatch}></ManageClassStu>
                    </Panel>
                    <Panel header="所有的班级" key="2">
                        <ManageAllClassStu AllClassData={this.props.AllClassData} dispatch={this.props.dispatch}></ManageAllClassStu>
                    </Panel>
                    <Panel header="签到" key="3" disabled>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default ClassItemStu = Form.create({})(ClassItemStu);