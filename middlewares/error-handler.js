'use strict';
const render = require('../controllers/render');

module.exports = function* (next) {
    try {
        yield* next;
    } catch (err) {

        if (err.status) {
            this.status = err.status;
            yield render.index({ error: err.message }, 'errors/404.dust');
        } 
        else if (err.name == 'ValidationError') {

            let errors = {};
            this.status = 400;

            for (let field in err.errors) {
                errors[field] = err.errors[field].message;
            }

            this.body = { errors: errors };

        } else {
            this.status = 500;
            this.body = 'Error 500';            
        }

        console.error(err.message, err.stack);
    }
}