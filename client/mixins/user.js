import React from 'react';

import UserStore from '../stores/user';
import UserActions from '../actions/users';

let UserMixin = (cb) =>{
  return {
    getInitialState() {
      return cb(this);
    },
    componentWillMount() {
      UserActions.getUsers();
      UserStore.onChange(this.onChange);
    },
    componentWillUnount(){
      UserStore.off(this.onChange);
    },
    onChange() {
      if (this.isMounted()) {
        this.setState(cb(this));
      }
    }
  };
};

export default UserMixin;