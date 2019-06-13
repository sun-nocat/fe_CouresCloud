import React from 'react'

import { Form, Row, Col, List, Input, Button, Card , Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class ManageClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            success:false
        }

    }

    componentDidMount(){

    }


    handleSubmit = e => {
		e.preventDefault();
		console.log(e)


		this.props.form.validateFields((err, values) => {
            console.log(values)
			if (!err) {
				this.props.dispatch({
					type: 'classModel/createClass',
					payload: values
				}
				)
			}
		});
    };
    
    count(data){
        console.log(data)
        if(data){
            const da = data.split(',')
            const res = String(da.length) + '人'
            return res
        } else {
            return '0人'
        }

    }


    onClick(id){

        console.log(id)
        this.props.dispatch({
            type:'classModel/submitSigin',
            payload:{class_id:id}
        })

        this.setState({success:true})

    }
    render() {

        console.log('render')
        const {classData, siginData} = this.props;
        if (!classData) {
            this.props.dispatch({
                type: 'classModel/queryClass',
                payload: {}
            })
        }
        const { data } = classData
        console.log(siginData)
        // const {data:sigin } = siginData
        

    

		return (
            <div>

                       {this.state.success && (
                    <Alert message="发布成功" type="success" />
                    )}
                {data &&(
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
                        {data.class_id}<Button onClick={(e)=>this.onClick(data.id)} style={{position:"absolute",right:'30%'}} type="danger">发布签到</Button> <Button onClick={(e)=>this.onClick(data.id)} style={{position:"absolute",right:'30%'}} type="danger">发布签到</Button>  <Button style={{float:'right'}} type="primary">{ this.count(data.student_id)}</Button>
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

export default ManageClass = Form.create({})(ManageClass);