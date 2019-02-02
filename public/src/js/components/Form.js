/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description Form
 */

'use strict';

import React, { Component } from 'react';

import styles from './Form.less';

export class Field extends Component {
  state = {
    hasError: false,
  };

  render() {
    return (
      <label className="c-form-item">
        <span className="c-form-title">{this.props.title}</span>
        {this.props.children}
        {this.props.tip ? <div className="c-form-tip">{this.props.tip}</div> : null}
      </label>
    );
  }
}

export class Input extends Component {
  state = {
    initialValue: '',
    value: '',
  };

  static getDerivedStateFromProps({ initialValue }, state) {
    if (!state.initialValue && initialValue) {
      return { initialValue, value: initialValue }
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
    this.props.onChange && this.props.onChange(value);
  };

  render() {
    const { onChange } = this;
    const { placeholder, disabled } = this.props;
    const { value } = this.state;

    return (
      <input className="c-form-input" {...{ value, placeholder, onChange, disabled }}/>
    );
  }
}
