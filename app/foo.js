var rx = require("rx");

var foo = function() {
    return rx.Observable.return(42)
};

module.exports = foo;