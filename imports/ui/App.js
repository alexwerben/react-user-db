import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { User } from '../api/user.js';
import UserRender from './UserRender.js';

class App extends Component {
  renderUsers() {
    return this.props.user.map((task) => (
      <UserRender key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>User List</h1>
        </header>

        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    user: User.find({}).fetch(),
  };
})(App);
