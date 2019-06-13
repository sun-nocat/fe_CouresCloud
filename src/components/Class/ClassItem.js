import React from 'react'

import { Form, Collapse, Row, Col, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";
import CreateClass from './CreateClass'
import ManageClass from './ManageClass'
import { login } from '../../models/login.js'
const Panel = Collapse.Panel;


class ClassItem extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		}
		this.callback = this.callback.bind(this)
	}

	callback(key) {
		console.log(key);
		this.props.dispatch({
			type: 'classModel/queryClass',
			payload: {}
	})
	}

	componentDidMount(){

		// 查询签到
		this.props.dispatch({
			type:'classModel/querySigin',
			payload:{}
		})
	}


	render() {
		const { type } = this.props.userData
		console.log(type)
		if (!type) {
			return <div>未登录</div>
		}

		return (


			<div>
				<Collapse defaultActiveKey={['1']} onChange={this.callback}>
					<Panel header="添加班级" key="1">
						<CreateClass isCreateClass = {this.props.isCreateClass} dispatch = {this.props.dispatch}></CreateClass>
					</Panel>
					<Panel header="管理班级" key="2">
							<ManageClass siginData={this.props.siginData} classData = {this.props.classData} dispatch = {this.props.dispatch}></ManageClass>
					</Panel>
					{/* <Panel header="签到" key="3" key="3">
						<SiginItem dispatch = {this.props.dispatch}></SiginItem>
					</Panel> */}
				</Collapse>
			</div>
		);
	}
}

export default ClassItem = Form.create({})(ClassItem);