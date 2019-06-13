import React from 'react';
import { Button, Card, Empty, Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';
import LoginItem from '../../components/Login/LoginItem.js'
import { connect } from 'dva';
import CourseItem from '../../components/Course/CourseItem'
import CourseItemStu from '../../components/Course/CourseItemStu'
// import ClassItemStu from '../../components/Class/ClassItemStu'

function CoursePage(props) {

	console.log(props)

	return (

		<div style={{ height: '100%' }}>
			{props.userData.type && props.userData.type.msg.status === 2 && (
				<CourseItem courseData={props.courseData} userData={props.userData} dispatch={props.dispatch} ></CourseItem>
			)}
			{props.userData.type && props.userData.type.msg.status === 1 && (
				<CourseItemStu myCourse={props.myCourse} courseData={props.courseData} userData={props.userData}  dispatch={props.dispatch} ></CourseItemStu>
			)}
			{!props.userData.type &&
				<Empty />
			}
		</div>

	)

}



// 这里返回的是一个对象， 返回的值，将会绑定到props上
function mapStateToProps(state) {
    const { userData } = state.editModel
    const { courseData, myCourse } = state.courseModel
	console.log(state)
	return {
        userData,
		courseData,
		myCourse

	}
}

export default connect(mapStateToProps)(CoursePage);