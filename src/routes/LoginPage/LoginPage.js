import React from 'react';
import { Button, Card, Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';
import  LoginItem  from '../../components/Login/LoginItem.js'
import { connect } from 'dva';
import { save } from '../../models/login.js'


function LoginPage(props) {

    console.log(props)

    return (
        <div style={{ height: '100%' }}>
            <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
                <Col>
                    <Card title="登录" bordered={false} style={{ width: '100%' }}>
                        <LoginItem history={props.history} user={props.user} value={ props.value } dispatch={ props.dispatch }/>
                    </Card>
                </Col>
            </Row>
        </div>

    )

}



// 这里返回的是一个对象， 返回的值，将会绑定到props上
function mapStateToProps(state) {
    const { value, user } = state.loginModel
    console.log(state)
    return {
        value,
        user
    }
}

export default connect(mapStateToProps)(LoginPage);