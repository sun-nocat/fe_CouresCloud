import React from 'react';
import { Button, Card, Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';
import RegisterItem from '../../components/Login/RegisterItem.js'
import { connect } from 'dva';
import { save } from '../../models/login.js'


function RegisterPage(props) {

    console.log(props)

    return (
        <div style={{ height: '100%' }}>
            <Row type="flex" justify="center" align="top" style={{ height: '100%' }}>
                <Col span={16}>
                    <Card title="注册" bordered={false} style={{ width: '100%' }}>
                        <RegisterItem history = {props.history} registerState = {props.registerState} dispatch = {props.dispatch}></RegisterItem>
                    </Card>
                </Col>
            </Row>
        </div>

    )

}



// 这里返回的是一个对象， 返回的值，将会绑定到props上
function mapStateToProps(state) {
    const { value, user,registerState } = state.loginModel
    console.log(state)
    return {
        value,
        user,
        registerState
    }
}

export default connect(mapStateToProps)(RegisterPage);