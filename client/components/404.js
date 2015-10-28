import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h2>404</h2>
        {/* etc. */}
      </div>
    )
  }
});

export default NoMatch;
