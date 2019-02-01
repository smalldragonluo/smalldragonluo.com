/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description index
 */

'use strict';

import React, { Component } from 'react';
import {hot} from 'react-hot-loader/root'
import { ListView, PullToRefresh } from 'antd-mobile';
import axios from 'axios';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

import styles from './index-mobile.less';

class Index extends Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    isLoading: false
  };

  componentDidMount() {
    this.loadMoreData();
  }

  // 当前页数
  startPage = 1;
  mappedData = {};

  /**
   * 加载更多
   */
  loadMoreData = () => {
    if (this.state.isLoading) {
      return;
    }

    this.setState({ isLoading: true });

    const startPage = this.startPage++;

    axios
      .get('/api/list', {
        params: {
          startPage,
          pageSize: 20,
        }
      })
      .then(({ data }) => {
        this.setMoreData(startPage, data.data);
      })
      .catch((error) => {
        Toast.offline('出了点小问题', 1);
        console.error(error.stack);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  /**
   * 将数据设置到 ListView
   * @param pageIndex
   * @param list
   */
  setMoreData = (pageIndex, list) => {
    const rowCount = list.length;
    const mappedData = {};

    for (let i = 0; i < rowCount; i++) {
      const ii = ((pageIndex - 1) * rowCount) + i;
      mappedData[`${ii}`] = list[i];
    }

    this.mappedData = { ...this.mappedData, ...mappedData };

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.mappedData),
      isLoading: false
    });
  };

  renderItem = (item, sectionID, rowID) => {
    return (
      <div className={styles.post}>
        <div className="user">
          <img className="avatar" src={item.user.avatar}/>
          <span className="nickname">{item.user.userName}</span>
          <span className="date">{item.createdAt}</span>
        </div>
        <pre className="content">{item.content}</pre>
      </div>
    );
  };

  onRefresh = () => {
    this.startPage = 1;
    this.mappedData = {};
    this.loadMoreData();
  };

  render() {
    return (
      <ListView
        className={styles.tab}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>笑话大王</span>}
        renderFooter={() =>
          <div style={{ padding: 4, textAlign: 'center' }}>
            {this.state.isLoading ? '加载中' : '到底啦'}
          </div>
        }
        renderRow={this.renderItem}
        pullToRefresh={
          <PullToRefresh
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
          />
        }
        onEndReached={this.loadMoreData}
        onEndReachedThreshold={500}
        scrollRenderAheadDistance={500}
        pageSize={20}
      />
    );
  }
}

export default hot(Index);
