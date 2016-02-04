
var reduman = require('..');

var INCREMENT = 1;
var DECREMENT = -1;

exports['create and invoke empty reducer'] = function (test) {
    var r = reduman();
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    var result = r(42);
    
    test.ok(result);
    test.equal(result, 42);
};

exports['add reducer using when'] = function (test) {
    var r = reduman().when({ type: INCREMENT }, function (state, data) { return state + 1 });
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    test.equal(r(0, { type: INCREMENT }), 1);
    test.equal(r(42, 'foo'), 42);
};

