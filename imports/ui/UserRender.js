import React, { Component } from 'react';

import { User } from '../api/user.js';

export default class UserRender extends Component {
  toggleActive() {
    User.update(this.props.task._id, {
      $set: { active: !this.props.task.active},
    });
  }

  render() {
    return (
      <li>
        <button onClick={this.toggleActive.bind(this)}>
          toggleActive
        </button>
        {this.props.task.first_name} {this.props.task.last_name} {this.props.task.active.toString()}
      </li>
    );
  }
}
