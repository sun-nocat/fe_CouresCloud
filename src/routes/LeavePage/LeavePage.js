import React from 'react';
import { Button, Card, Empty ,Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';
import LoginItem from '../../components/Login/LoginItem.js'
import { connect } from 'dva';
import MySigin from '../../components/Class/MySigin'
import StuSigin from '../../components/Class/StuSigin'
import LeaveItem from '../../components/Leave/LeaveItem'
import MyLeave from '../../components/Leave/MyLeave'
import ClassItemStu from '../../components/Class/ClassItemStu'

function LeavePage(props) {
	console.log(props.userData)



	return (
		<div style={{ height: '100%' }}>
			{props.userData.type && props.userData.type.msg.status === 2 && (
				<LeaveItem queryLeave={props.queryLeave} siginData={props.siginData} classData={props.classData} isCreateClass={props.isCreateClass} userData={props.userData} dispatch={props.dispatch} ></LeaveItem>
			)}
				{props.userData.type && props.userData.type.msg.status === 1 && (
				<MyLeave queryLeave={props.queryLeave} siginData={props.siginData}  isCreateClass={props.isCreateClass} userData={props.userData} dispatch={props.dispatch} ></MyLeave>
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
		isSuccess,
        isCreateClass,
        queryLeave,
		classData,
		AllClassData,
		siginData
	}
}

export default connect(mapStateToProps)(LeavePage);