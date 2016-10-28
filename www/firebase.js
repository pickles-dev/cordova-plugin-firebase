var exec = require('cordova/exec');

exports.logEvent = function(name, params, success, error) {
    exec(success, error, "FirebasePlugin", "logEvent", [name, params]);
};

exports.setUserId = function(id, success, error) {
    exec(success, error, "FirebasePlugin", "setUserId", [id]);
};

exports.setUserProperty = function(name, value, success, error) {
    exec(success, error, "FirebasePlugin", "setUserProperty", [name, value]);
};
