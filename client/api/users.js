// crud requests
import request from 'superagent';

async function getUsers () {
  try {
    let users = await new Promise((resolve, reject) => {
      request.get('/users/list')
              .set('X-Requested-With', 'XMLHttpRequest')
              .end(function(err, res){
                err && reject(err);
                resolve(res);
              });
    });

    return users;
  } catch (err) {
    console.error(err);
  }
}

export default { getUsers: getUsers };