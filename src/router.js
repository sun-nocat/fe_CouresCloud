import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage/LoginPage.js'
import RegisterPage from './routes/LoginPage/RegisterPage.js'
import EditPage from './routes/EditPage/EditPage.js'
import ClassPage from './routes/ClassPage/ClassPage.js'
import CoursePage from './routes/CoursePage/CoursePage.js'
import SiginPage from './routes/ClassPage/SiginPage.js'
import LeavePage from './routes/LeavePage/LeavePage.js'
import { Button, Card, Row, Col, Divider, Form, Icon, Input, Checkbox } from 'antd';

function RouterConfig({ history }) {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/class" component={ClassPage} />
          <Route path="/course" component={CoursePage} />
          <Route path="/sigin" component={SiginPage} />
          <Route path="/leave" component={LeavePage} />

        </Switch>
      </Router>
  );
}

export default RouterConfig;
