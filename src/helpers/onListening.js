/**
 * Event listener for HTTP server "listening" event.
 */
var debug = require('debug')('challengeone:server');
module.exports = function() {
    var addr = this.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}