/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description my
 */

'use strict';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'
import axios from 'axios';
import { Toast } from 'antd-mobile';
import { API } from '../consts';
import Logo from '../components/Logo';
import { Field, Input } from '../components/Form';

import styles from './my-mobile.less';

class My extends Component {
  state = {
    nickname: '',
    email: '',
    hasError: false,
    isLoading: false
  };

  doRegister = () => {
    if (this.state.isLoading) {
      return;
    }

    const { userName, email } = this.state;

    if (!userName || !email) {
      return;
    }

    this.setState({ isLoading: true });

    axios
      .post(API.USER_LOGIN, {
        userName,
        email,
      })
      .then(({ data }) => {
        this.setState({ isLoading: false });
        this.props.event.fire('login', data.data);
      })
      .catch((error) => {
        Toast.offline('出了点小问题', 1);
        console.error(error.stack);
        this.setState({ isLoading: false });
      });
  };

  logout = () => {
    if (this.state.isLoading) {
      return;
    }

    this.setState({ isLoading: true });

    axios
      .get(API.USER_LOGOUT)
      .then(() => {
        this.setState({ isLoading: false });
        this.props.event.fire('logout');
      })
      .catch((error) => {
        Toast.offline('出了点小问题', 1);
        console.error(error.stack);
        this.setState({ isLoading: false });
      });
  };

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div className={styles.tab}>
        {
          this.props.userInfo.userName ?
            <div className="user-info">
              <div className="bg-up">
                <div className="circle circle-1"/>
                <div className="circle circle-2"/>
                <div className="circle circle-3"/>
              </div>
              <div className="modal">
                <div className="banner">
                  <Logo size={70}/>
                </div>
                <div className="form-body">
                  <Field
                    title="昵称"
                  >
                    <Input
                      name="userName"
                      disabled={true}
                      initialValue={this.props.userInfo.userName}
                    />
                  </Field>
                  <Field
                    title="电子邮箱"
                  >
                    <Input
                      name="email"
                      disabled={true}
                      initialValue={this.props.userInfo.email}
                    />
                  </Field>
                  <div className="options">
                    <button className="c-button submit" type="primary" onClick={this.logout}>登出</button>
                  </div>
                </div>
              </div>
            </div> :
            <div className="register-form">
              <div className="bg-up">
                <div className="circle circle-1"/>
                <div className="circle circle-2"/>
                <div className="circle circle-3"/>
              </div>
              <div className="modal">
                <div className="banner">
                  <Logo size={70}/>
                </div>
                <div className="form-body">
                  <Field
                    title="昵称"
                    errorMessage="昵称格式不正确"
                  >
                    <Input
                      name="userName"
                      placeholder="请输入您的昵称"
                      initialValue={this.state.userName}
                      onChange={(value) => this.onChange('userName', value)}
                    />
                  </Field>
                  <Field
                    title="电子邮箱"
                    tip="邮箱仅用于区分用户，不会向您发送验证码"
                    errorMessage="邮箱格式不正确"
                  >
                    <Input
                      name="email"
                      placeholder="请输入您的邮箱地址"
                      initialValue={this.state.email}
                      onChange={(value) => this.onChange('email', value)}
                    />
                  </Field>
                  <div className="options">
                    <button className="c-button submit" type="primary" onClick={this.doRegister}>填好啦！</button>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default hot(My);
