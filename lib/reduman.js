
var reduman = (function () {
    function makeFilter(filter) {
        if (typeof filter === 'function')
            return filter;
            
        if (typeof filter === 'object')
            return function (data) {
                if (typeof data !== 'object')
                    return false;
                    
                for (var n in filter)
                    if (filter[n] !== data[n])
                        return false;
                        
                return true;
            }
            
        return function (data) { return data === filter; };
    }
    
    function createManager() {
        var steps = [];
        
        var reducer = function (state, data) {
            var l = steps.length;
            
            for (var k = 0; k < l; k++) {
                var step = steps[k];
                
                if (step.filter(data))
                    return step.fn(state, data);
            }
            
            return state;
        };
        
        reducer.when = function (filter, fn) {
            steps.push({ filter: makeFilter(filter), fn: fn });
            return reducer;
        }
        
        reducer.otherwise = function (fn) {
            steps.push({ filter: function (data) { return true; }, fn: fn });
            return reducer;
        }
        
        return reducer;
    }
    
    return createManager;
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = reduman;
    
