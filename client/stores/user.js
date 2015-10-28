import _ from 'lodash';
import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/dispatcher';

const CHANGE_EVENT = 'change';
let users = [];

let UserStore = _.assign({}, EventEmitter.prototype, {
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  off(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getUsers() {
    return users;
  },
  setUsers(_users){
    users = _users;
  }
});

UserStore.dispatchToken = Dispatcher.register((action) => {

  switch(action.type) {
  case 'load-users':
    UserStore.setUsers(action.body);
    UserStore.emitChange();
    break;
  }

});

export default UserStore;