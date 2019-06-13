import React from 'react'

import { Form, Row, Col,Icon, message, List, Input, Button, Card, Alert, Upload } from 'antd';
import { Link } from "dva/router";

import { login } from '../../models/login.js'

// 教师编辑课程
class EditCourse extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false,
            course:''
        }

        this.click = this.click.bind(this)

    }

    componentDidMount() {

    }



    count(data) {
        console.log(data)
        if (data) {
            const da = data.split(',')
            const res = String(da.length) + '人'
            return res
        } else {
            return '0人'
        }

    }

    // 点击  上传
    click(id) {
        console.log(id)
        this.setState({course:id})
        this.setState({success:true})

        // this.props.dispatch({
        //     type: 'courseModel/chooseCourse',
        //     payload: {
        //         id: id
        //     }
        // })
        // this.setState({success: true})
    }

    onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      }


    render() {

        console.log('render')
        const { courseData } = this.props;
        // if (!courseData) {
        //     this.props.dispatch({
        //         type: 'courseModel/queryCourse',
        //         payload: {}
        //     })
        // }
        // this.props.dispatch({
        //     type: 'courseModel/queryCourse',
        //     payload: {}
        // })
        const { data } = courseData

        
    const datas ={
        name: 'file',
        action: 'http://127.0.0.1:3000/uploadCourse',
        headers: {
          authorization: 'authorization-text',
        },
    
        withCredentials: true,

    }



        return (
            <div>
                {this.state.success && (
                    <Alert message="上传成功" type="success" />
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
                                    {data.msg}
                                    <div>
                                        {data.dept && <Button style={{}} size="small" type="dashed">{data.dept}</Button>}

                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{data.requires == '0' ? '必修' : '选修'}</Button>
                                    </div>
                                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                        <Button style={{}} size="small" type={data.status == "0" ? "dashed" : 'danger'}>{data.status == '0' ? '公有' : '私有'}</Button>
                                        <Button style={{ position: 'absolute', left: '50%' }} size="small" type="dashed">{String(data.grade) + '分'}</Button>

                                    </div>

                                    <Upload {...datas} data = {{msg : "精品资源", course_id: `${data.id}` }}>
                                    <Button style={{ float: 'right' }} onClick={() => this.click(data.id)} type="primary"><Icon type="upload" />上传课件</Button>
                                    </Upload>

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

export default EditCourse = Form.create({})(EditCourse);