import React from 'react';
import { Button, Card, Empty ,Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';
import LoginItem from '../../components/Login/LoginItem.js'
import { connect } from 'dva';
import ClassItem from '../../components/Class/ClassItem'

import ClassItemStu from '../../components/Class/ClassItemStu'

function ClassPage(props) {
	console.log(props.userData)



	return (
		<div style={{ height: '100%' }}>
			{props.userData.type && props.userData.type.msg.status === 2 && (
				<ClassItem siginData={props.siginData} classData={props.classData} isCreateClass={props.isCreateClass} userData={props.userData} dispatch={props.dispatch} ></ClassItem>
			)}
				{props.userData.type && props.userData.type.msg.status === 1 && (
				<ClassItemStu queryLeave={props.queryLeave} siginData={props.siginData} AllClassData={props.AllClassData}  classData={props.classData} isCreateClass={props.isCreateClass} userData={props.userData} dispatch={props.dispatch} ></ClassItemStu>
			)}
			{!props.userData.type &&
		<Empty />
			}
		</div>

	)

}



// 这里返回的是一个对象， 返回的值，将会绑定到props上
function mapStateToProps(state) {
	const { userData, isSuccess } = state.editModel
	const { isCreateClass, classData,siginData,queryLeave, AllClassData } = state.classModel
	console.log(state)
	return {
		userData,
		queryLeave,
		isSuccess,
		isCreateClass,
		classData,
		AllClassData,
		siginData
	}
}

export default connect(mapStateToProps)(ClassPage);