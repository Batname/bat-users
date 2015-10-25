'use strict';

module.exports = function* ( next ){
    let bots = 'googlebot|yahoo|bingbot|baiduspider|yandex|yeti|yodaobot|gigabot|ia_archiver|facebookexternalhit|twitterbot|developers\.google\.com';
    if ( this.request.header && this.request.header['user-agent'] &&
        bots.includes(this.request.header['user-agent']) ) this.state.isBot = true;
    yield* next;
};