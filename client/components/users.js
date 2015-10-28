import React, {propTypes} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import UserStore from '../stores/user';
import UserMixin from '../mixins/user';

function getIninialUsers() {
  return {users: UserStore.getUsers()};
}

const Users = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  mixins: [UserMixin(getIninialUsers)],
  render() {
    let users = _.map(this.state.users, (user, i) => {
      return (
          <li key={i}><Link to={`/users/list/user/${user._id}`}>{user.displayName}</Link></li>
        );
    });
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>{users}</ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Users;
