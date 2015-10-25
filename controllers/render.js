'use strict';

module.exports = {
    index(data, template) {
        return function* (){
            if ( this.state.isBot ) {
                this.body = 'hello bot';
            } else {
                this.body = data;
            }
        }
    }
};