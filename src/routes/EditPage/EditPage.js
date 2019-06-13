import React from 'react';
import { Button, Card, Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';
import LoginItem from '../../components/Login/LoginItem.js'
import { connect } from 'dva';
import EditItem from '../../components/Edit/EditItem'
import { save } from '../../models/login.js'


function EditPage(props) {

    console.log(props)

    return (
        <div style={{ height: '100%' }}>
            <EditItem isSuccess={props.isSuccess} userData= {props.userData} dispatch = {props.dispatch} ></EditItem>
        </div>
    )
}



// 这里返回的是一个对象， 返回的值，将会绑定到props上
function mapStateToProps(state) {
    const { userData, isSuccess } = state.editModel
    console.log(state)
    return {
        userData,
        isSuccess,
    }
}

export default connect(mapStateToProps)(EditPage);