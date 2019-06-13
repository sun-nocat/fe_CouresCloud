import React from "react";

import {
  Form,
  Collapse,
  Row,
  Col,
  List,
  Card,
  Icon,
  Input,
  Button,
  Radio,
  Alert
} from "antd";
import { Link } from "dva/router";

const Panel = Collapse.Panel;

class LeaveItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callback = this.callback.bind(this);
  }

  callback(key) {
    console.log(key);
    this.props.dispatch({
      type: "classModel/queryLeave",
      payload: {}
    });
  }

  click(id){

    this.props.dispatch({
        type: "classModel/dealLeave",
        payload: {
            id:id,
            agree:"同意",
            agree_msg:"同意"
        }
      });
  }

  componentDidMount() {
    // 查询签到
    this.props.dispatch({
      type: "classModel/queryLeave",
      payload: {}
    });
  }

  render() {
    const { type } = this.props.userData;
    console.log(type);
    if (!type) {
      return <div>未登录</div>;
    }


    const { queryLeave } = this.props
    console.log(queryLeave)

    return (
      <div>
        <Collapse defaultActiveKey={["1"]} onChange={this.callback}>
          <Panel header="管理签到" key="1">
            <div>
              {this.state.success && (
                <Alert message="发布成功" type="success" />
              )}
              {queryLeave && (
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3
                  }}
                  dataSource={queryLeave}
                  renderItem={data => (
                    <List.Item>
                      <Card title={data.name}>
                        {data.name}
                        <Button
                          style={{ float: "right" }}
                          size="small"
                          type={ "dashed"}
                        >
                        {data.agree == "同意" ? "同意":"等待批准"}
                        </Button>

                        <div style={{ marginTop: "10%" }}>
                          <Button
                            style={{ position: "absolute", right: "60%" }}
                            type="danger"
                          >
                             {data.end_time}

                          </Button>{" "}
                          <Button
                            style={{ position: "absolute", right: "30%" }}
                            type="danger"
                          >
                            {data.begin_time}
                          </Button>
                          <Button style={{ float: "right" }} type="primary" onClick={()=>this.click(data.id)}>
                          同意
                          </Button>
                        </div>
                      </Card>
                    </List.Item>
                  )}
                />
              )}
            </div>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default (LeaveItem = Form.create({})(LeaveItem));
