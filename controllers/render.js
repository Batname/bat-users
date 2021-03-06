'use strict';

const config = require('config');
const path = require('path');
const templatesPath = path.join(config.projectRoot, '/services/node_modules/bat-users/views');

module.exports = {
    index(data, template) {
        return function* (){
            if ( this.state.isBot ) {
                yield this.render('backend/' + template, {
                  path: templatesPath,
                  isBot: this.state.isBot,
                  data: data
                });
            } else {
                this.body = data;
            }
        }
    }
};