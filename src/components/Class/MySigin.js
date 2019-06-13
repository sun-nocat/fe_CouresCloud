import React from 'react'

import { Form, Collapse, Row, Col, Icon, Input, Button, Radio, Alert } from 'antd';
import { Link } from "dva/router";
import CreateClass from './CreateClass'
import ManageSigin from './ManageSigin'
import { login } from '../../models/login.js'
const Panel = Collapse.Panel;


class MySigin extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
		}
		this.callback = this.callback.bind(this)
	}

	callback(key) {
		console.log(key);
		this.props.dispatch({
			type: 'classModel/querySigin',
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
					<Panel header="管理签到" key="1">
						<ManageSigin siginData={this.props.siginData} isCreateClass = {this.props.isCreateClass} dispatch = {this.props.dispatch}></ManageSigin>
					</Panel>
		
				</Collapse>
			</div>
		);
	}
}

export default MySigin = Form.create({})(MySigin);