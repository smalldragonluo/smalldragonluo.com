/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TabBar } from 'antd-mobile';
import Icon from './components/Icon';
import IndexTab from './pages/index-mobile';
import MyTab from './pages/my-mobile';

import styles from './index-mobile.less';

const tabComponents = {
  index: IndexTab,
  research: MyTab,
  message: MyTab,
  my: MyTab,
};

export default class Index extends Component {
  state = {
    currentTab: 'index',
    tabs: [
      {
        name: 'index',
        title: '首页',
        icon: <Icon url={require('../images/home.svg')}/>,
        selectedIcon: <Icon url={require('../images/home_fill.svg')}/>
      },
      {
        name: 'research',
        title: '探索',
        icon: <Icon url={require('../images/category.svg')}/>,
        selectedIcon: <Icon url={require('../images/category_fill.svg')}/>
      },
      {
        name: 'message',
        title: '消息',
        icon: <Icon url={require('../images/comment.svg')}/>,
        selectedIcon: <Icon url={require('../images/comment_fill.svg')}/>
      },
      {
        name: 'my',
        title: '我',
        icon: <Icon url={require('../images/me.svg')}/>,
        selectedIcon: <Icon url={require('../images/me_fill.svg')}/>
      }
    ]
  };

  /**
   * 渲染 tab
   * @param tabName
   * @return {*}
   */
  renderTab = (tabName) => {
    const TabComponent = tabComponents[tabName];
    return <TabComponent/>;
  };

  render() {
    return (
      <div className={styles.layout}>
        <TabBar
          unselectedTintColor="#000000"
          tintColor="#57be6a"
          barTintColor="#f7f7f7"
        >
          {this.state.tabs.map(({ name, title, icon, selectedIcon }) => {
            return (
              <TabBar.Item
                title={title}
                key={name}
                selected={this.state.currentTab === name}
                icon={icon}
                selectedIcon={selectedIcon}
                onPress={() => {
                  this.setState({
                    currentTab: name,
                  });
                }}
              >
                {this.renderTab(name)}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
