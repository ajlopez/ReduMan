
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

exports['add two reducer using when'] = function (test) {
    var r = reduman()
        .when({ type: INCREMENT }, function (state, data) { return state + 1 })
        .when({ type: DECREMENT }, function (state, data) { return state - 1 });
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    test.equal(r(0, { type: INCREMENT }), 1);
    test.equal(r(9, { type: DECREMENT }), 8);
    test.equal(r(42, 'foo'), 42);
};

exports['add two reducer using when and value filter (not object)'] = function (test) {
    var r = reduman()
        .when(INCREMENT, function (state, data) { return state + 1 })
        .when(DECREMENT, function (state, data) { return state - 1 });
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    test.equal(r(0, INCREMENT), 1);
    test.equal(r(9, DECREMENT), 8);
    test.equal(r(42, 'foo'), 42);
};

exports['using predicate functions in when'] = function (test) {
    var r = reduman()
        .when(function (data) { return data === INCREMENT; }, function (state, data) { return state + 1 })
        .when(function (data) { return data === DECREMENT; }, function (state, data) { return state - 1 });
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    test.equal(r(0, INCREMENT), 1);
    test.equal(r(9, DECREMENT), 8);
    test.equal(r(42, 'foo'), 42);
};

exports['using otherwise'] = function (test) {
    var r = reduman()
        .when({ type: INCREMENT }, function (state, data) { return state + 1 })
        .when({ type: DECREMENT }, function (state, data) { return state - 1 })
        .otherwise(function (state, data) { return 0; });
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    test.equal(r(0, { type: INCREMENT }), 1);
    test.equal(r(9, { type: DECREMENT }), 8);
    test.equal(r(42, 'foo'), 0);
};

