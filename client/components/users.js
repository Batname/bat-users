import React, {propTypes} from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

const Users = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
              <li key="10"><Link to={`/users/list/user/10`}>My User</Link></li>
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Users;
