
var reduman = require('..');

exports['create and invoke empty reducer'] = function (test) {
    var r = reduman();
    
    test.ok(r);
    test.equal(typeof r, 'function');
    
    var result = r(42);
    
    test.ok(result);
    test.equal(result, 42);
};



