import React from 'react'

import { Form, Row, Col, List, Input, Button, Card, Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class ManageClassStu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: false
        }

        this.joinClass = this.joinClass.bind(this)

    }

    componentDidMount() {

    }


    handleSubmit = e => {
        e.preventDefault();
        console.log(e)


        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                this.props.dispatch({
                    type: 'classModel/createAllClass',
                    payload: values
                }
                )
            }
        });
    };

    joinClass(data) {
        console.log(data)
        this.props.dispatch({
            type: 'classModel/joinClass',
            payload: {
                id: data
            }
        })
        this.setState({value:true})

    }





    render() {
        console.log('render')
        console.log(this.props)
        const { AllClassData } = this.props;


        if (!AllClassData) {
            // this.props.dispatch({
            //     type: 'classModel/queryAllClass',
            //     payload: {}
            // })
        }
        const { data } = AllClassData



        return (
            <div>

                {this.state.value && (
                    <Alert message="Success Text" type="success" />
                )}
                {data && (
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 3,
                        }}
                        dataSource={data}
                        renderItem={data => (
                            <List.Item>
                                <Card title={data.name}>
                                    {data.msg}  <Button style={{ float: 'right' }} value={data.id} onClick={() => this.joinClass(data.id)} type="primary">加入班级</Button>
                                </Card>
                            </List.Item>
                        )}
                    />
                )

                }

            </div>

        );
    }
}

export default ManageClassStu = Form.create({})(ManageClassStu);