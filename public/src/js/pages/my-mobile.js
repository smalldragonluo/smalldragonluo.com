/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description my
 */

'use strict';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root'
import axios from 'axios';
import { InputItem, List } from 'antd-mobile';
import { Toast } from 'antd-mobile';
import { API } from '../consts';
import Logo from '../components/Logo';

import styles from './my-mobile.less';

class My extends Component {
  state = {
    nickname: '',
    mail: '',
    hasError: false
  };

  componentDidMount() {

  }

  loadMoreData = () => {
    if (this.state.isLoading) {
      return;
    }

    this.setState({ isLoading: true });

    const startPage = this.startPage++;

    axios
      .get(API.GET_LIST, {
        params: {
          startPage,
          pageSize: 20,
        }
      })
      .then(({ data }) => {
        this.setMoreData(startPage, data.data);
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        Toast.offline('出了点小问题', 1);
        console.error(error.stack);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div className={styles.tab}>
        <div className="banner">
          <Logo size={80}/>
        </div>
        <div className="register">
          <List>
            <InputItem
              type="nickname"
              placeholder="请输入您的昵称"
              error={this.state.hasError}
              onChange={(value) => this.onChange('nickname', value)}
              value={this.state.nickname}
            >昵称</InputItem>
            <InputItem
              type="mail"
              placeholder="请输入您的邮箱地址"
              error={this.state.hasError}
              onChange={(value) => this.onChange('mail', value)}
              value={this.state.mail}
            >邮箱</InputItem>
          </List>
          <p className="tip">邮箱仅用于区分用户，不会向您发送验证码</p>
        </div>
      </div>
    );
  }
}

export default hot(My);
