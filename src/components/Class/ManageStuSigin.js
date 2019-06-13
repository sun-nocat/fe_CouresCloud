import React from 'react'

import { Form, Row, Col, List, Input, Button, Card , Alert } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'


class ManageStuSigin extends React.Component {

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
					type: 'classModel/querySigin',
					payload: {}
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
            type:'classModel/doSigin',
            payload:{id:id}
        })

        this.setState({success:true})

    }
    render() {

        console.log('render')
        const { siginData} = this.props;

        console.log(siginData)
        const {data} = siginData
        

    

		return (
            <div>

                       {this.state.success && (
                    <Alert message="签到成功" type="success" />
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
                        {data.class_id}
                        <Button style={{float:'right'}} size="small" type={data.status == "0" ? "dashed" : 'danger'}>{data.status == '0' ? '签到结束' : '正在签到'}</Button>

                        <div style={{marginTop:'10%'}}>
                        <Button style={{position:"absolute",right:'60%'}} type="danger">{data.time}</Button> 
                        {data.status !=="0"&&(
                        <Button onClick={(e)=>this.onClick(data.id)} style={{position:"absolute",right:'30%'}} type="danger">参加签到</Button>

                        )}
                          <Button style={{float:'right'}} type="primary">{ this.count(data.student_id)}</Button>
                         

                        </div>
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

export default ManageStuSigin = Form.create({})(ManageStuSigin);