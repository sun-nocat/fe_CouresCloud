import React from "react";
import { connect } from "dva";
import {
  Button,
  Card,
  Row,
  Col,
  Drawer,
  Radio,
  Icon,
  Progress,
  Carousel,
  Rate,
 Input,
  Checkbox
} from "antd";
import TabItem from "../components/TabItem.js";
import styles from "./IndexPage.css";
import { Link } from "dva/router";
import QueryCourseMsg from '../components/Course/QueryCourseMsg'
const { Meta } = Card;

const RadioGroup = Radio.Group;

function IndexPage(props) {
  console.log(props.user);
  if (!props.user.status) {
    console.log('跳转到登录')
    props.history.push('/login')
  }

  // 获取用户的数据
  console.log(props.userData.type);
  if (!props.userData.type || !props.userData.type.status) {
    props.dispatch({
      type: "editModel/getData",
      payload: {}
    });

    props.dispatch({
      type: "courseModel/queryCourseMsg",
      payload: {}
    });
  }

  function logout(e) {
    console.log(e);
    console.log(props);
    props.dispatch({
      type: "loginModel/logout",
      paylod: null
    });
  }

  function open() {
    props.dispatch({
      type: "loginModel/tabOpenToTrue",
      payload: {
        type: true
      }
    });
  }

  function onClose() {
    props.dispatch({
      type: "loginModel/tabOpenToTrue",
      payload: {
        type: false
      }
    });
  }

  return (
    <div>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100%", backgroundColor: "#808080	" }}
      >
        <Col style={{ fontSize: "28px" }}>云课堂</Col>
      </Row>
      <div style={{ top: "5px", right: "10px", position: "absolute" }}>
        <Button type="default" onClick={logout}>
          退出登录
        </Button>
      </div>
      <div style={{ top: "5px", left: "10px", position: "absolute" }}>
        <Button type="default" onClick={open}>
          菜单
        </Button>
      </div>

      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={props.tabOpen}
      >
        {props.userData.type && (
          <div style={{marginTop:'5%'}}>
            <Link to="/class">
              <Button onClick={onClose} type="primary" block>
                班级
              </Button>
            </Link>
          </div>
        )}

        <div style={{marginTop:'5%'}}>
          <Link to="/course">
            <Button onClick={onClose} type="primary" block>
              课程
            </Button>
          </Link>
        </div>

        <div style={{marginTop:'5%'}}>
          <Link to="/sigin">
            <Button onClick={onClose} type="primary" block>
              签到
            </Button>
          </Link>
        </div>

        <div style={{marginTop:'5%'}}>
          <Link to="/leave">
            <Button onClick={onClose} type="primary" block>
              请假
            </Button>
          </Link>
        </div>

        <div style={{marginTop:'5%'}}>
          <Link to="/edit">
            <Button onClick={onClose} type="primary" block>
              个人信息修改
            </Button>
          </Link>
        </div>

        <p>Some contents...</p>
      </Drawer>



<div style={{textAlign:'center'}}>
<Carousel autoplay style={{textAlign:'center'}}>
    <div style={{textAlign:'center'}}>
      <h3>本周学习时长</h3>
    <Progress percent={50} showInfo={false} />
    </div>
    <div style={{textAlign:'center'}}>
      <h3>今日已登录</h3>
      <Progress type="circle" percent={100} />
    </div>
    <div style={{textAlign:'center'}}>
      <h3>期待您的5星好评</h3>
      <span>
      <Rate disabled defaultValue={5} />
      </span>
    </div>
  </Carousel>

</div>





<QueryCourseMsg queryCourseMsg={props.queryCourseMsg} dispatch={props.dispatch}></QueryCourseMsg>















    </div>
  );
}

// 这里返回的是一个对象， 返回的值，将会绑定到props上
function mapStateToProps(state) {
  const { user, tabOpen } = state.loginModel;
  const { userData, isSuccess } = state.editModel;
  const {queryCourseMsg} = state.courseModel;
  console.log(state);
  return {
    user,
    tabOpen,
    userData, //用户数据
    queryCourseMsg
  };
}

export default connect(mapStateToProps)(IndexPage);
