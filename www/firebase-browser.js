exports.logEvent = function(name, params, success, error) {
    if (typeof success === 'function') {
        success();
    }
};

exports.setUserId = function(id, success, error) {
    if (typeof success === 'function') {
        success();
    }
};

exports.setUserProperty = function(name, value, success, error) {
    if (typeof success === 'function') {
        success();
    }
};
