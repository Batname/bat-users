// CRUD 5 METHODS

import Dispatcher from '../core/dispatcher';
import Api from '../api/users';

async function getUsers () {
  try{
    let users = await Api.getUsers();
    let body = users.body;
    Dispatcher.dispatch({
      type: 'load-users', body
    })
  } catch(err){
    console.error(err);
  }
}

export default { getUsers: getUsers };