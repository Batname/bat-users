'use strict';

exports.User = option => {

    return [{
              _id:         option.oid('user-mk'),
              displayName: "user 1",
              email:       "mk@javascript.ru",
              password:    "123456"
            }, {
              _id:         option.oid('user-iliakan'),
              displayName: "user 2",
              email:       "iliakan@javascript.ru",
              password:    "123456"
            }];
}



