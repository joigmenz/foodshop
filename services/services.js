var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../app/config');

exports.createToken = function(user) {
    var payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(15, "minutes").unix(),
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}